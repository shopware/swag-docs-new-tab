import template from './sw-product-detail-custom.html.twig';
const { Component } = Shopware;

Component.register('sw-product-detail-custom', {
    template,

    metaInfo() {
        return {
            title: 'Custom'
        };
    },
});
