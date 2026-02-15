import  { execSync } from 'child_process';

export default function (eleventyConfig) {

  eleventyConfig.on('eleventy.after', function () {
    execSync(`npx pagefind --site _site --glob \"profiles/**/*.html\"`, { 
      encoding: 'utf-8'
    });
    console.log('Pagefind index updated');
  });

}