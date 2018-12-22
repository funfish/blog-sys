const path = require('path');
const fs = require('fs');
const fsPromises = fs.promises;
const { 
  enStringDate, 
  shortContent,
  divideImageContent,
} = require('../../utils');
const { markdown } = require('../../utils/markdown');

class Home {
  // 获取首页的博客列表
  async indexList(ctx, next) {
    const postParentPath = path.resolve('./static/_posts/');
    const data = [];
    try {
      const fileList = (await fsPromises.readdir(postParentPath)).filter(item => /\.md/.test(item));
      await Promise.all(fileList.map(async (fileName, index) => {
        const filePath = path.join(postParentPath, fileName);
        const stat = await fsPromises.stat(filePath);
        const isFile = stat.isFile();
        if (isFile) {
          const createTimeEN = enStringDate(stat.ctimeMs);
          let content = await fsPromises.readFile(filePath);
          content = shortContent(content.toString());
          const contentHtml = markdown.render(content);
          data.push({
            createTimeEN,
            id: index,
            title: fileName,
            content: contentHtml
          })
        }
      }));
      // 倒序
      data.sort((a, b) => b.id - a.id);
      data.map(item => {
        item.title = item.title.replace(/(^\d+\.\s)|(\.md\w*)/g, '');
      });
      return {
        code: 200,
        data
      }
    } catch (error) {
      // 添加到日志
      return {
        code: 500,
        msg: error
      }
    }
  }
  // 获取单个博客内容
  async postContent(ctx, next) {
    const title = ctx.params.title;
    try {
      const postParentPath = path.resolve('./static/_posts/');
      const fileName = (await fsPromises.readdir(postParentPath)).find(
        item => item.replace(/(^\d+\.\s)|(\.md\w*)/g, '') === title
      );
      const filePath = path.join(postParentPath, fileName);
      const stat = await fsPromises.stat(filePath);
      const isFile = stat.isFile();
      if (isFile) {
        const createTimeEN = enStringDate(stat.ctimeMs);
        let content = await fsPromises.readFile(filePath);
        content = content.toString();
        const { contentString, bannerUrl } = divideImageContent(content);
        const contentHtml = markdown.render(contentString);
        return {
          code: 200,
          data: {
            createTimeEN,
            title,
            bannerUrl,
            content: contentHtml,
          }
        };
      }
    } catch (error) {
      return {
        code: 500,
        msg: error
      }
    }
  }
}

module.exports = new Home();