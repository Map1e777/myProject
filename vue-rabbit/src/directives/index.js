//图片懒加载
export const lazyPlugin = {
  install(app) {
    app.directive('img-lazy', {
      mounted(el, binding) {
        function lazy() {
          const n = el.getBoundingClientRect()
          // 图片出现在可视窗口
          if (window.innerHeight - n.top > 0) {
            el.src = binding.value
            window.removeEventListener('scroll',lazy)
          }
          console.log(1);
        }
        window.addEventListener('scroll', lazy)
      },

    })
  }
}
