import cn from './cn';
import en from './en';

import { createI18n } from 'vue-i18n'

const i18n = createI18n({
    legacy: false,  // 使用 Composition API 模式，则需要将其设置为false
    locale: 'en', // 使用语言
    messages: {
        en: en,
        zh_CN: cn
    },
    globalInjection: true, // 全局注入 $t 函数
    fallbackLocale: 'en',// 没有英文的时候默认中文语言
})

// console.log('i18n', i18n)

function setLanguages() { // 语言设置
    let locale = i18n.global.locale.value
    i18n.global.locale.value = (locale == 'en' ? 'zh_CN' : 'en')
}

export {
    i18n,
    setLanguages
} 

// vue-i18n文档地址： https://vue-i18n.intlify.dev/api/legacy.html