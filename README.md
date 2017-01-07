2016.12.19 选用测试框架流程 并搭建基础测试框架

1.测试流程管理
karma 测试流程管理 http://karma-runner.github.io/1.0/index.html 
selenium 测试流程管理 Karma比Selenium更加轻量，更适合运行单元测试。而脚本运行的浏览器环境选择PhantomJS

2断言库
jasmine 断言 https://segmentfault.com/a/1190000000317146
mocha  断言  支持报告diff

3测试平台
phantomjs webkit https://github.com/ariya/phantomjs http://phantomjs.org/network-monitoring.html 		https://my.oschina.net/leejun2005/blog/407043
phantomjs  放弃 不支持flash
chrome 直接测试即可
chrome 插件已经验证

4 测试报表
coverage


决策：
karma + mocha  适合做详细测试

karma + jasmine 适合做angular 1 测试

最后选用  karma + jasmine + chrome


搭建基础测试框架

https://github.com/yeoman/generator-karma


Jasmine API

getJasmineRequireObj().requireMatchers = function(jRequire, j$) {
    var availableMatchers = [
        'toBe',
        'toBeCloseTo',
        'toBeDefined',
        'toBeFalsy',
        'toBeGreaterThan',
        'toBeGreaterThanOrEqual',
        'toBeLessThanOrEqual',
        'toBeLessThan',
        'toBeNaN',
        'toBeNull',
        'toBeTruthy',
        'toBeUndefined',
        'toContain',
        'toEqual',
        'toHaveBeenCalled',
        'toHaveBeenCalledWith',
        'toHaveBeenCalledTimes',
        'toMatch',
        'toThrow',
        'toThrowError'
    ]}
    
    
http://www.cnblogs.com/iloveyou-sky/p/5754147.html

http://blog.csdn.net/future_todo/article/details/52815596

http://karma-runner.github.io/1.0/config/configuration-file.html