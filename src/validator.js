module.exports = {
    auth: {
        account: require("./auth/account-validator"),
        profile: require("./auth/profile-validator"),
        role: require("./auth/role-validator")
    },
    inventory: {
        expeditionDoc: require("./inventory/expedition-doc-validator"),
        expeditionSPK: require("./inventory/expedition-spk-validator"),
        finishedGoodsDoc: require("./inventory/finished-goods-doc-validator"),
        inventoryMovementApproval: require("./inventory/inventory-movement-validator"),
        inventory: require("./inventory/inventory-validator"),
        inventoryMovement: require("./inventory/inventory-movement-validator"),
        transferInDoc: require("./inventory/transfer-in-doc-validator"),
        transferInItem: require("./inventory/transfer-in-item-validator"),
        transferOutDoc: require("./inventory/transfer-out-doc-validator"),
        transferOutItem: require("./inventory/transfer-out-item-validator"),
        adjustmentDoc: require("./inventory/adjustment-doc-validator"),
        adjustmentItem: require("./inventory/adjustment-item-validator"),
        stockOpnameDoc: require("./inventory/stock-opname-doc-validator"),
        stockOpnameDocItem: require("./inventory/stock-opname-doc-item-validator")
    },
    master: {
        article: {
            articleApproval: require("./master/article/article-approval-validator"),
            articleBrand: require("./master/article/article-brand-validator"),
            articleCategory: require("./master/article/article-category-validator"),
            articleColor: require("./master/article/article-color-validator"),
            articleCostCalculationDetail: require("./master/article/article-cost-calculation-detail-validator"),
            articleCostCalculation: require("./master/article/article-cost-calculation-validator"),
            articleCounter: require("./master/article/article-counter-validator"),
            articleMaterial: require("./master/article/article-material-validator"),
            articleMotif: require("./master/article/article-motif-validator"),
            articleOrigin: require("./master/article/article-origin-validator"),
            articleSeason: require("./master/article/article-season-validator"),
            articleSize: require("./master/article/article-size-validator"),
            articleSubCounter: require("./master/article/article-sub-counter-validator"),
            articleTheme: require("./master/article/article-theme-validator"),
            articleType: require("./master/article/article-type-validator"),
            article: require("./master/article/article-validator"),
            articleVariant: require("./master/article/article-variant-validator")
        },
        storage: require("./master/storage-validator"),
        supplier: require("./master/supplier-validator"),
        item: require("./master/item-w-component-validator"),
        component: require("./master/component-validator"),
        finishedGoods: require("./master/finished-goods-validator"),
        material: require("./master/material-validator"),
        bank: require("./master/bank-validator"),
        cardType: require("./master/card-type-validator"),
        module: require("./master/module-validator"),
        store: require("./master/store-validator"),
        storeShift: require("./master/store-shift-validator"),
        division: require("./master/division-validator"),
        unit: require("./master/unit-validator"),
        colour: require("./master/colour-validator"),
        expeditionServices: require("./master/expedition-service-validator")
    },
    manufacture: {
        fabricConsumptionDocument: require("./manufacture/fabric-consumption-document-validator"),
        fabricConsumptionArticle: require("./manufacture/fabric-consumption-article-validator"),
        fabricConsumptionItem: require("./manufacture/fabric-consumption-item-validator"),
        costCalculationDocument: require("./manufacture/cost-calculation-document-validator"),
        costCalculationArticle: require("./manufacture/cost-calculation-article-validator"),
        costCalculationItem: require("./manufacture/cost-calculation-item-validator"),
        finishingItem: require("./manufacture/finishing-item-validator"),
        finishing: require("./manufacture/finishing-validator")
    },
    merchandiser: {
        SPKDoc: require("./merchandiser/spk-doc-validator"),
        SPKItem: require("./merchandiser/spk-item-validator")
    },
    sales: {
        salesDoc: require("./sales/sales-doc-validator"),
        salesItem: require("./sales/sales-item-validator"),
        salesDetail: require("./sales/sales-detail-validator"),
        salesReturnDoc: require("./sales/sales-return-doc-validator"),
        salesReturnItem: require("./sales/sales-return-item-validator"),
        promo: require("./sales/promo-validator"),
        promoCriteria: require("./sales/promo-criteria-validator"),
        promoReward: require("./sales/promo-reward-validator"),
        promoCriteriaSelectedProduct: require("./sales/promo-criteria-selected-product-validator"),
        promoRewardDiscountProduct: require("./sales/promo-reward-discount-product-validator"),
        promoCriteriaPackage: require("./sales/promo-criteria-package-validator"),
        promoRewardSpecialPrice: require("./sales/promo-reward-special-price-validator")
    }
};
