const withLess = require('@zeit/next-less');
const withCSS = require('@zeit/next-css');
const debug = process.env.NODE_ENV !== "production";
const Home = require('./server/controller/home');
// const fetch = require('isomorphic-unfetch');

module.exports = withCSS(Object.assign({}, 
  withLess({
    cssModules: true,
    cssLoaderOptions: {
      localIdentName: "[local]___[hash:base64:5]"
    }
    // 禁止文件
    // useFileSystemPublicRoutes: false
  }),
  {
    cssModules: false,
    assetPrefix: !debug ? '/blog-sys/' : '',
    async exportPathMap() {
      if (debug) return;
      const result = {};
      // fetch 报错 手动狗头
      // const postListResponse = await fetch('http://localhost:3000/api/post/getPostList');
      // const postListJson = await postListResponse.json();
      // const postList = postListJson.data || [];
      
      // await Promise.all(postList.map(async (item, index) => {
      //   const dataResponse = await request(`http://localhost:3000/api/post/getPost/:${item.title}`);
      //   const dataJson = await dataResponse.json();
      //   result[`/post/${title}`] = {
      //     page: '/Post/Post',
      //     query: dataJson
      //   }
      // }));

      // result['/'] = { 
      //   page: "/Index/Index", 
      //   query: postListResponse 
      // }
      const postListResponse = await Home.indexList();
      const postList = postListResponse.data || [];

      await Promise.all(postList.map(async (item, index) => {
        const data = await Home.indexList({ params: { title: item.title } });
        result[`/post/${item.title}`] = {
          page: '/Post/Post',
          query: data
        }
      }));
      
      result['/'] = { 
        page: "/Index/Index", 
        query: postList 
      }
      
      return result
    },    
  }
));