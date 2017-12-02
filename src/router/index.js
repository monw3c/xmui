import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: (resolve) => {
        require(['@/views/home'], resolve)
      }
    }
    // {
    //   path: '/buttons',
    //   name: 'buttons',
    //   component: (resolve) => {
    //     require(['@/views/buttons'], resolve)
    //   }
    // }
    // {
    //     path:'/install',
    //     name: 'install',
    //     component: (resolve) => {
    //         require(['../views/index/install.vue'], resolve)
    //     }
    // },
    // {
    //     path:'/resource',
    //     name: 'resource',
    //     component: (resolve) => {
    //         require(['../views/index/resource.vue'], resolve)
    //     }
    // },

    // // Basic
    // {
    //     path:'/basic/button',
    //     name: 'button',
    //     component: (resolve) => {
    //         require(['../views/basic/button.vue'], resolve)
    //     }
    // },
    // {
    //     path:'/basic/drop-button',
    //     name: 'drop-button',
    //     component: (resolve) => {
    //         require(['../views/basic/dropButton.vue'], resolve)
    //     }
    // },
    // {
    //     path:'/basic/table',
    //     name: 'eduTable',
    //     component: (resolve) => {
    //         require(['../views/basic/EduTable.vue'], resolve)
    //     }
    // },
    // {
    //     path:'/basic/collapse',
    //     name: 'collapse',
    //     component: (resolve) => {
    //         require(['../views/basic/Collapse.vue'], resolve)
    //     }
    // },
    // {
    //     path:'/basic/tag',
    //     name: 'tag',
    //     component: (resolve) => {
    //         require(['../views/basic/tag.vue'], resolve)
    //     }
    // },
    // {
    //     path:'/basic/card',
    //     name: 'card',
    //     component: (resolve) => {
    //         require(['../views/basic/card.vue'], resolve)
    //     }
    // },
    // {
    //     path:'/basic/indexSimpleTable',
    //     name: 'SimpleTable',
    //     component: (resolve) => {
    //         require(['../views/basic/indexSimpleTable.vue'], resolve)
    //     }
    // },
    // // Form
    // {
    //     path:'/form/form',
    //     name: 'form',
    //     component: (resolve) => {
    //         require(['../views/form/form.vue'], resolve)
    //     }
    // },
    // {
    //     path:'/form/checkbox',
    //     name: 'checkbox',
    //     component: (resolve) => {
    //         require(['../views/form/checkbox.vue'], resolve)
    //     }
    // },
    // {
    //     path:'/form/radio',
    //     name: 'radio',
    //     component: (resolve) => {
    //         require(['../views/form/radio.vue'], resolve)
    //     }
    // },
    // {
    //     path:'/form/datepicker',
    //     name: 'datepicker',
    //     component: (resolve) => {
    //         require(['../views/form/datepicker.vue'], resolve)
    //     }
    // },
    // {
    //     path:'/form/daterangepicker',
    //     name: 'daterangepicker',
    //     component: (resolve) => {
    //         require(['../views/form/daterangepicker.vue'], resolve)
    //     }
    // },
    // {
    //     path:'/form/timepicker',
    //     name: 'timepicker',
    //     component: (resolve) => {
    //         require(['../views/form/timepicker.vue'], resolve)
    //     }
    // },
    // {
    //     path:'/form/simpletime',
    //     name: 'simpletime',
    //     component: (resolve) => {
    //         require(['../views/form/simpletime.vue'], resolve)
    //     }
    // },
    // {
    //     path:'/form/datebook',
    //     name: 'datebook',
    //     component: (resolve) => {
    //         require(['../views/form/datebook.vue'], resolve)
    //     }
    // },
    // {
    //     path:'/form/monthpicker',
    //     name: 'monthpicker',
    //     component: (resolve) => {
    //         require(['../views/form/monthpicker.vue'], resolve)
    //     }
    // },
    // {
    //     path:'/form/slider',
    //     name: 'slider',
    //     component: (resolve) => {
    //         require(['../views/form/slider.vue'], resolve)
    //     }
    // },
    // {
    //     path:'/form/switch',
    //     name: 'switch',
    //     component: (resolve) => {
    //         require(['../views/form/switch.vue'], resolve)
    //     }
    // },
    // {
    //     path:'/common/edu_input_demo',
    //     name: 'eduInputDemo',
    //     component: (resolve) => {
    //         require(['../views/common/eduInputDemo.vue'], resolve)
    //     }
    // },
    // {
    //     path:'/form/textfield',
    //     name: 'textfield',
    //     component: (resolve) => {
    //         require(['../views/form/textfield.vue'], resolve)
    //     }
    // },
    // {
    //     path:'/form/number',
    //     name: 'number',
    //     component: (resolve) => {
    //         require(['../views/form/number.vue'], resolve)
    //     }
    // },
    // {
    //     path:'/form/cascader',
    //     name: 'cascader',
    //     component: (resolve) => {
    //         require(['../views/form/cascader.vue'], resolve)
    //     }
    // },
    // {
    //     path:'/form/select',
    //     name: 'select',
    //     component: (resolve) => {
    //         require(['../views/form/select.vue'], resolve)
    //     }
    // },
    // {
    //     path:'/form/autosearch',
    //     name: 'autosearch',
    //     component: (resolve) => {
    //         require(['../views/form/autoSearch.vue'], resolve)
    //     }
    // },

    // // Common
    // {
    //     path:'/common/timeline',
    //     name: 'timeline',
    //     component: (resolve) => {
    //         require(['../views/common/timeline.vue'], resolve)
    //     }
    // },
    // {
    //     path:'/common/alert',
    //     name: 'alert',
    //     component: (resolve) => {
    //         require(['../views/common/alert.vue'], resolve)
    //     }
    // },
    // {
    //     path:'/common/dialog',
    //     name: 'dialog',
    //     component: (resolve) => {
    //         require(['../views/common/dialog.vue'], resolve)
    //     }
    // },
    // {
    //     path:'/common/detailInfo',
    //     name: 'detailInfo',
    //     component: (resolve) => {
    //         require(['../views/common/detailInfo.vue'], resolve)
    //     }
    // },
    // {
    //     path:'/common/spin',
    //     name: 'spin',
    //     component: (resolve) => {
    //         require(['../views/common/spin.vue'], resolve)
    //     }
    // },
    // {
    //     path:'/common/tooltip',
    //     name: 'tooltip',
    //     component: (resolve) => {
    //         require(['../views/common/tooltip.vue'], resolve)
    //     }
    // },
    // {
    //     path:'//common/upload',
    //     name: 'upload',
    //     component: (resolve) => {
    //         require(['../views/common/upload.vue'], resolve)
    //     }
    // },
    // {
    //     path:'/common/audio',
    //     name: 'audio',
    //     component: (resolve) => {
    //         require(['../views/common/audio.vue'], resolve)
    //     }
    // },
    // {
    //     path:'/common/progress',
    //     name: 'progress',
    //     component: (resolve) => {
    //         require(['../views/common/progress.vue'], resolve)
    //     }
    // },
    // {
    //     path:'/common/tree',
    //     name: 'tree',
    //     component: (resolve) => {
    //         require(['../views/common/tree.vue'], resolve)
    //     }
    // },
    // {
    //     path:'/form/textarea',
    //     name: 'textarea',
    //     component: (resolve) => {
    //         require(['../views/form/EduTextarea.vue'], resolve)
    //     }
    // },

    // // Global
    // {
    //     path:'/global/loadingbar',
    //     name: 'loadingbar',
    //     component: (resolve) => {
    //         require(['../views/global/loadingbar.vue'], resolve)
    //     }
    // },
    // {
    //     path:'/global/loading',
    //     name: 'loading',
    //     component: (resolve) => {
    //         require(['../views/global/loading.vue'], resolve)
    //     }
    // },
    // {
    //     path:'/global/notification',
    //     name: 'notification',
    //     component: (resolve) => {
    //         require(['../views/global/notification.vue'], resolve)
    //     }
    // },
    // {
    //     path:'/global/modal',
    //     name: 'modal',
    //     component: (resolve) => {
    //         require(['../views/global/modal.vue'], resolve)
    //     }
    // },
    // {
    //     path:'/global/preview',
    //     name: 'preview',
    //     component: (resolve) => {
    //         require(['../views/global/preview.vue'], resolve)
    //     }
    // },

    // // Navigation
    // {
    //     path:'/navigation/breadcrumb',
    //     name: 'breadcrumb',
    //     component: (resolve) => {
    //         require(['../views/navigation/breadcrumb.vue'], resolve)
    //     }
    // },
    // {
    //     path:'/navigation/pagination',
    //     name: 'pagination',
    //     component: (resolve) => {
    //         require(['../views/navigation/pagination.vue'], resolve)
    //     }
    // },
    // // Other
    // {
    //     path:'/form',
    //     name: 'from',
    //     component: (resolve) => {
    //         require(['../views/form.vue'], resolve)
    //     }
    // }
  ]
})
