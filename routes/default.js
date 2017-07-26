// PURCHASE REQUEST
var v1PurchaseRequestByTagsRouter = require('../src/routers/v1/purchase-request/purchase-request-by-tags-router');
var v1PurchaseRequestByUserRouter = require('../src/routers/v1/purchase-request/purchase-request-by-user-router');
var v1PurchaseRequestMonitoringRouter = require('../src/routers/v1/purchase-request/purchase-request-monitoring-router');
var v1PurchaseRequestMonitoringAllUserRouter = require('../src/routers/v1/purchase-request/purchase-request-monitoring-all-user-router');
var v1PurchaseRequestRouter = require('../src/routers/v1/purchase-request/purchase-request-router');

// PURCHASE ORDER
var v1PurchaseOrderByTagsRouter = require('../src/routers/v1/purchase-order/purchase-order-by-tags-router');
var v1PurchaseOrderSplitRouter = require('../src/routers/v1/purchase-order/purchase-order-split-router');
// var v1POMonitoringByUserRouter = require('../src/routers/v1/purchase-order/purchase-order-monitoring-by-user-router');
// var v1POMonitoringRouter = require('../src/routers/v1/purchase-order/purchase-order-monitoring-router');
// var v1POMonitoringPriceRouter = require('../src/routers/v1/purchase-order/purchase-order-monitoring-price-router');
// var v1PurchaseOrderUnpostedRouter = require('../src/routers/v1/purchase-order/purchase-order-un-posted-router');
var v1PurchaseOrderByUserRouter = require('../src/routers/v1/purchase-order/purchase-order-by-user-router');
// var v1ReportPoCategoryPeriodeRouter = require('../src/routers/v1/purchase-order/reports/purchase-order-report-category-router');
// var v1ReportPoUnitPeriodeRouter = require('../src/routers/v1/purchase-order/reports/purchase-order-report-unit-router');
// var v1ReportPoSubUnitCategoriesPeriodeRouter = require('../src/routers/v1/purchase-order/reports/purchase-order-report-unit-category-router');
// var v1ReportPoSubUnitPeriodeRouter = require('../src/routers/v1/purchase-order/reports/purchase-order-report-sub-unit-router');
var v1PurchaseOrderRouter = require('../src/routers/v1/purchase-order/purchase-order-router');

// PURCHASE ORDER EXTERNAL
var v1PurchaseOrderExternalPostRouter = require('../src/routers/v1/purchase-order-external/purchase-order-external-post-router');
var v1PurchaseOrderExternalByUserRouter = require('../src/routers/v1/purchase-order-external/purchase-order-external-by-user-router');
var v1PurchaseOrderExternalRouter = require('../src/routers/v1/purchase-order-external/purchase-order-external-router');
var v1PurchaseOrderExternalCancelRouter = require('../src/routers/v1/purchase-order-external/purchase-order-external-cancel-router');
var v1PurchaseOrderExternalUnpostRouter = require('../src/routers/v1/purchase-order-external/purchase-order-external-unpost-router');
// var v1PurchaseOrderExternalCloseRouter = require('../src/routers/v1/purchase-order-external/purchase-order-external-close-router');


module.exports = function (server) {
    //PURCHASE REQUEST
    v1PurchaseRequestByTagsRouter().applyRoutes(server, "/purchase-requests/by-tags");
    v1PurchaseRequestByUserRouter().applyRoutes(server, "/purchase-requests/by-user");
    v1PurchaseRequestMonitoringAllUserRouter().applyRoutes(server, "/purchase-requests/monitoring/all-user");
    v1PurchaseRequestMonitoringRouter().applyRoutes(server, "/purchase-requests/monitoring");
    v1PurchaseRequestRouter().applyRoutes(server, "/purchase-requests");

     //PURCHASE ORDER
    v1PurchaseOrderByTagsRouter().applyRoutes(server, "/purchase-orders/by-tags");
    v1PurchaseOrderSplitRouter().applyRoutes(server,                        "/purchase-orders/split");
    // v1POMonitoringByUserRouter().applyRoutes(server,                        "/purchase-orders/monitoring/by-user");
    // v1POMonitoringRouter().applyRoutes(server,                              "/purchase-orders/monitoring");
    // v1PurchaseOrderUnpostedRouter().applyRoutes(server,                     "/purchase-orders/unposted");
    v1PurchaseOrderByUserRouter().applyRoutes(server,                       "/purchase-orders/by-user");
    // v1ReportPoCategoryPeriodeRouter().applyRoutes(server,                   "/purchase-orders/reports/categories");
    // v1ReportPoUnitPeriodeRouter().applyRoutes(server,                       "/purchase-orders/reports/units");
    // v1ReportPoSubUnitCategoriesPeriodeRouter().applyRoutes(server,          "/purchase-orders/reports/units-categories");
    // v1ReportPoSubUnitPeriodeRouter().applyRoutes(server,                    "/purchase-orders/reports/subUnits");
    v1PurchaseOrderRouter().applyRoutes(server,                             "/purchase-orders");

    //PURCHASE ORDER EXTERNAL
    v1PurchaseOrderExternalPostRouter().applyRoutes(server,                 "/v1/purchase-orders/externals/post"); 
    v1PurchaseOrderExternalByUserRouter().applyRoutes(server,               "/v1/purchase-orders/externals/by-user");
    v1PurchaseOrderExternalRouter().applyRoutes(server,                     "/v1/purchase-orders/externals");
    v1PurchaseOrderExternalCancelRouter().applyRoutes(server,               "/v1/purchase-orders/externals/cancel");
    v1PurchaseOrderExternalUnpostRouter().applyRoutes(server,               "/v1/purchase-orders/externals/unpost");
    // v1PurchaseOrderExternalCloseRouter().applyRoutes(server,                "/v1/purchase-orders/externals/close");

};
