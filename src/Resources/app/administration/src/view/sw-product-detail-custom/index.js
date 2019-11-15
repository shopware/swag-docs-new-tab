import { Component } from 'src/core/shopware';
import template from './sw-product-detail-custom.html.twig';

Component.register('sw-product-detail-custom', {
    template,

    metaInfo() {
        return {
            title: 'Custom'
        };
    },
});
