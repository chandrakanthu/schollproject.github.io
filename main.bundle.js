webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Route.modules.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_feecollection_feecollection_component__ = __webpack_require__("./src/app/pages/feecollection/feecollection.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_studentdetails_studentdetails_component__ = __webpack_require__("./src/app/pages/studentdetails/studentdetails.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_updatemarks_updatemarks_component__ = __webpack_require__("./src/app/pages/updatemarks/updatemarks.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_supportpage_supportpage_component__ = __webpack_require__("./src/app/pages/supportpage/supportpage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_homeworkpage_homeworkpage_component__ = __webpack_require__("./src/app/pages/homeworkpage/homeworkpage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_getstudentdetails_getstudentdetails_component__ = __webpack_require__("./src/app/pages/getstudentdetails/getstudentdetails.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login_component__ = __webpack_require__("./src/app/pages/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_dashboard_dashboard_component__ = __webpack_require__("./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_review_review_component__ = __webpack_require__("./src/app/pages/review/review.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_remark_remark_component__ = __webpack_require__("./src/app/pages/remark/remark.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var ROUTES = [
    {
        path: 'feecollection',
        component: __WEBPACK_IMPORTED_MODULE_2__pages_feecollection_feecollection_component__["a" /* FeecollectionComponent */]
    },
    {
        path: 'updatestudentdetails',
        component: __WEBPACK_IMPORTED_MODULE_3__pages_studentdetails_studentdetails_component__["a" /* StudentdetailsComponent */]
    },
    {
        path: 'updatestudentmarks',
        component: __WEBPACK_IMPORTED_MODULE_4__pages_updatemarks_updatemarks_component__["a" /* UpdatemarksComponent */]
    },
    {
        path: 'homework',
        component: __WEBPACK_IMPORTED_MODULE_6__pages_homeworkpage_homeworkpage_component__["a" /* HomeworkpageComponent */]
    },
    {
        path: 'getstudetdetails',
        component: __WEBPACK_IMPORTED_MODULE_7__pages_getstudentdetails_getstudentdetails_component__["a" /* GetstudentdetailsComponent */]
    },
    {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_9__pages_dashboard_dashboard_component__["a" /* DashboardComponent */]
    },
    {
        path: 'reviews',
        component: __WEBPACK_IMPORTED_MODULE_10__pages_review_review_component__["a" /* ReviewpageComponent */]
    },
    {
        path: 'remarks',
        component: __WEBPACK_IMPORTED_MODULE_11__pages_remark_remark_component__["a" /* RemarkpageComponent */]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_8__pages_login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'supportpage',
        component: __WEBPACK_IMPORTED_MODULE_5__pages_supportpage_supportpage_component__["a" /* SupportpageComponent */]
    },
    {
        path: '**',
        redirectTo: '/feecollection',
        pathMatch: 'full'
    }
];
var RoutesModule = /** @class */ (function () {
    function RoutesModule() {
    }
    RoutesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(ROUTES)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], RoutesModule);
    return RoutesModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid pad0\">\r\n  \r\n   <router-outlet></router-outlet>          \r\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__comon_service_component__ = __webpack_require__("./src/app/comon.service.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(router, ComonService) {
        this.router = router;
        this.ComonService = ComonService;
        this.router.navigate(['/login']);
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'school-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_1__comon_service_component__["a" /* ComonService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_header_header_component__ = __webpack_require__("./src/app/pages/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_footer_footer_component__ = __webpack_require__("./src/app/pages/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_dashboard_dashboard_component__ = __webpack_require__("./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_feecollection_feecollection_component__ = __webpack_require__("./src/app/pages/feecollection/feecollection.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Route_modules__ = __webpack_require__("./src/app/Route.modules.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__comon_service_component__ = __webpack_require__("./src/app/comon.service.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_studentdetails_studentdetails_component__ = __webpack_require__("./src/app/pages/studentdetails/studentdetails.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_updatemarks_updatemarks_component__ = __webpack_require__("./src/app/pages/updatemarks/updatemarks.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_supportpage_supportpage_component__ = __webpack_require__("./src/app/pages/supportpage/supportpage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_homeworkpage_homeworkpage_component__ = __webpack_require__("./src/app/pages/homeworkpage/homeworkpage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__popups_confirmpopup_confirmpopup_component__ = __webpack_require__("./src/app/popups/confirmpopup/confirmpopup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_getstudentdetails_getstudentdetails_component__ = __webpack_require__("./src/app/pages/getstudentdetails/getstudentdetails.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__swimlane_ngx_charts__ = __webpack_require__("./node_modules/@swimlane/ngx-charts/release/esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_login_login_component__ = __webpack_require__("./src/app/pages/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_remark_remark_component__ = __webpack_require__("./src/app/pages/remark/remark.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_review_review_component__ = __webpack_require__("./src/app/pages/review/review.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__pages_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_4__pages_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_5__pages_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_7__pages_feecollection_feecollection_component__["a" /* FeecollectionComponent */],
                __WEBPACK_IMPORTED_MODULE_13__pages_studentdetails_studentdetails_component__["a" /* StudentdetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_14__pages_updatemarks_updatemarks_component__["a" /* UpdatemarksComponent */],
                __WEBPACK_IMPORTED_MODULE_16__pages_supportpage_supportpage_component__["a" /* SupportpageComponent */],
                __WEBPACK_IMPORTED_MODULE_17__pages_homeworkpage_homeworkpage_component__["a" /* HomeworkpageComponent */],
                __WEBPACK_IMPORTED_MODULE_18__popups_confirmpopup_confirmpopup_component__["a" /* ConfirmpopupComponent */],
                __WEBPACK_IMPORTED_MODULE_19__pages_getstudentdetails_getstudentdetails_component__["a" /* GetstudentdetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_22__pages_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_23__pages_remark_remark_component__["a" /* RemarkpageComponent */],
                __WEBPACK_IMPORTED_MODULE_24__pages_review_review_component__["a" /* ReviewpageComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_router__["b" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_8__Route_modules__["a" /* RoutesModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_20__swimlane_ngx_charts__["a" /* NgxChartsModule */],
                __WEBPACK_IMPORTED_MODULE_21__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_10__comon_service_component__["a" /* ComonService */], __WEBPACK_IMPORTED_MODULE_15__angular_common__["d" /* DatePipe */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/comon.service.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComonService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var ComonService = /** @class */ (function () {
    function ComonService(http) {
        this.http = http;
    }
    ComonService.prototype.getData = function (url, param) {
        return this.http.post(url, param, httpOptions)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ComonService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    ComonService.prototype.getmethodData = function (url, param) {
        return this.http.get(url)
            .map(this.extractData1)
            .catch(this.handleError);
    };
    ComonService.prototype.extractData1 = function (res) {
        var body = res;
        return body || {};
    };
    ComonService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(errMsg);
    };
    ComonService.prototype.setorganizationdata = function (data) {
        this.organizationdata = data;
    };
    ComonService.prototype.getorganizationdata = function () {
        return this.organizationdata;
    };
    ComonService.prototype.setschoolcode = function (data) {
        this.schoolcode = data;
    };
    ComonService.prototype.getschoolcode = function () {
        return this.schoolcode;
    };
    ComonService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ComonService);
    return ComonService;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<school-header></school-header>\r\n<div class=\"col-xs-9 col-md-10 col-sm-10 col-lg-10 contentwrapper noprint\" id=\"sectionbackground\">\r\n  <div class=\"row col-xs-12 col-md-12 col-sm-12 col-lg-12 pad0 mrgn60 \">\r\n            \r\n    <div class=\"col-xs-4 col-md-4 col-sm-4 col-lg-4\">\r\n      <ul class=\"cardstyle card1-color\">\r\n        <li class=\"totalcolor\">Fee Collection</li>\r\n        <li>Rs : {{schoolfeecollection}}</li>\r\n        \r\n      </ul>\r\n    </div>\r\n    <div class=\"col-xs-4 col-md-4 col-sm-4 col-lg-4\">\r\n      <ul class=\"cardstyle card2-color\">\r\n        <li class=\"totalcolor\">Student Absentees </li>\r\n        <li> {{absentstudent}} out of {{PresentCount}}</li>\r\n        \r\n      </ul>\r\n    </div>\r\n    <div class=\"col-xs-4 col-md-4 col-sm-4 col-lg-4\">\r\n      <ul class=\"cardstyle card3-color\">\r\n        <li class=\"totalcolor\">Staff Absentees </li>\r\n        <li>{{staffcount}} out of {{stafftotalcount}}</li>\r\n        \r\n      </ul>\r\n    </div>\r\n    <div class=\"col-xs-6 col-md-6 col-sm-6 col-lg-6 border_right\">\r\n      <div *ngIf=\"showactiveuserpiechart\">\r\n          <ngx-charts-pie-chart\r\n          [view]=\"view\"\r\n          [scheme]=\"colorScheme\"\r\n          [results]=\"multi\"\r\n          [animations]=\"true\"\r\n          [legend]=\"true\"\r\n          [legendPosition]=\"below\"\r\n          [labels]=\"true\">\r\n        </ngx-charts-pie-chart>\r\n      </div>  \r\n    </div>\r\n    <div class=\"col-xs-1 col-md-1 col-sm-1 col-lg-1\"></div>\r\n    <div class=\"col-xs-5 col-md-5 col-sm-5 col-lg-5 pad0 mrgntop\">\r\n    <div id=\"carousel\">\r\n      <div class=\"textcenter mrgn25 white_color\"> \r\n          <h4>Birthdays</h4>\r\n      </div>\r\n      <marquee>\r\n        <div class=\"slide\" *ngFor=\"let birthdaydetails of birthdaydetails\">\r\n            <img class=\"student_event_image\" src={{birthdaydetails.StudentURL}} />\r\n            <span class=\"white_color\">{{birthdaydetails.StudentName}}</span>\r\n            <span class=\"class_style white_color\">{{birthdaydetails.ClassName}}</span>\r\n            \r\n        </div>\r\n      </marquee>\r\n    </div>\r\n    </div>  \r\n       </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.scss":
/***/ (function(module, exports) {

module.exports = ".cardstyle {\n  list-style-type: none;\n  -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  height: 145px;\n  margin-top: 35px;\n  padding-left: 9px;\n  color: wheat;\n  text-align: center;\n  font-size: 20px;\n  font-weight: 600;\n  padding-top: 30px; }\n\n.cardstyle li {\n  padding-bottom: 5px;\n  padding-top: 5px; }\n\n.card1-color {\n  background: linear-gradient(60deg, #815294, #bb0a2a); }\n\n.card2-color {\n  background: linear-gradient(60deg, #815294, #0abb6e); }\n\n.card3-color {\n  background: linear-gradient(60deg, #FF5722, #ce330f); }\n\n.border_right {\n  border-right: 1px solid #000; }\n\n.student_event_image {\n  height: 60px;\n  width: 60px;\n  border-radius: 46%; }\n\n.mrgntop {\n  margin-top: 8%; }\n\n.mrgn25 {\n  margin: 25px; }\n\n#carousel {\n  width: 72%;\n  height: 200px;\n  background: linear-gradient(60deg, #1a3d1d, #1a3d1d);\n  overflow-y: scroll;\n  white-space: nowrap;\n  border: 1px solid #000; }\n\n#carousel .slide {\n  display: inline-block; }\n\n.class_style {\n  position: relative;\n  top: 22px;\n  right: 35%; }\n"

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comon_service_component__ = __webpack_require__("./src/app/comon.service.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(router, ComonService, datepipe) {
        this.router = router;
        this.ComonService = ComonService;
        this.datepipe = datepipe;
        this.colorScheme = {
            domain: ['#008000', '#ff0000']
        };
        this.view = [500, 300];
        this.PresentCount = 0;
        this.membercount = 0;
        this.staffcount = 0;
        this.stafftotalcount = 0;
        this.schoolcode = ComonService.getschoolcode();
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.getfeecollectiondata();
        this.getclasscountbyocd();
        this.getabsentdetails();
        this.getBirthdaydetails();
        this.getstaffdetails();
    };
    DashboardComponent.prototype.getabsentdetails = function () {
        var _this = this;
        var date = new Date();
        var inputparams = {
            DayAttendence: [{ OCODE: this.schoolcode, CLASSID: "", AttDay: date.getDate(), AttMonth: date.getMonth() + 1, MODE: 3, PeriodNo: 1 }]
        };
        var serviceurl = "/Wcf_VS2015.SVC/GetDayAttendence";
        this.ComonService.getData(serviceurl, inputparams).subscribe(function (Response) {
            var result = Response.GetDayAttendenceResult;
            if (result) {
                result = JSON.parse(Response.GetDayAttendenceResult);
                _this.absentstudent = result.length;
            }
            else {
                _this.absentstudent = 0;
            }
        }, function (error) {
            _this.errorMessage = error;
        });
    };
    DashboardComponent.prototype.getstaffdetails = function () {
        var _this = this;
        var inputparams = {
            GetStaffCount: [{ SchoolCode: this.schoolcode }]
        };
        var serviceurl = "Wcf_VS2015.SVC/GetStaffCount";
        this.ComonService.getData(serviceurl, inputparams).subscribe(function (Response) {
            if (JSON.parse(Response.GetStaffCountResult)[0].VALUE) {
                _this.staffdetails = JSON.parse(JSON.parse(Response.GetStaffCountResult)[0].VALUE)[0];
                if (_this.staffdetails) {
                    _this.staffcount = _this.staffdetails.Count;
                    _this.stafftotalcount = _this.staffdetails.TotalCount;
                }
            }
        }, function (error) {
            _this.errorMessage = error;
        });
    };
    DashboardComponent.prototype.getBirthdaydetails = function () {
        var _this = this;
        var date = new Date();
        var startdate = this.datepipe.transform(date, "MM/dd/yyyy");
        var todate = new Date(date.setDate(date.getDate() + 1));
        var enddate = this.datepipe.transform(todate, "MM/dd/yyyy");
        var inputparams = {
            GetStudentBirthday: [{
                    SchoolCode: this.schoolcode, StartDate: startdate, EndDate: enddate
                }]
        };
        var serviceurl = "Wcf_VS2015.SVC/GetStudentBirthdayList";
        this.ComonService.getData(serviceurl, inputparams).subscribe(function (Response) {
            if (JSON.parse(Response.GetStudentBirthdayListResult)[0].VALUE) {
                _this.birthdaydetails = JSON.parse(JSON.parse(Response.GetStudentBirthdayListResult)[0].VALUE);
            }
        }, function (error) {
            _this.errorMessage = error;
        });
    };
    DashboardComponent.prototype.getclasscountbyocd = function () {
        var _this = this;
        var inputparams = {
            GetClassCount: [
                { OrganizationCode: this.schoolcode }
            ]
        };
        var serviceurl = "Wcf_VS2015.SVC/GetClassCountbyOCODE";
        this.ComonService.getData(serviceurl, inputparams).subscribe(function (Response) {
            var response = JSON.parse(Response.GetClassCountbyOCODEResult);
            if (response) {
                response.map(function (item) {
                    _this.PresentCount += parseInt(item.PresentCount);
                });
            }
            else {
                _this.PresentCount = 0;
            }
            _this.getmembersaccountdetails();
        }, function (error) {
            _this.errorMessage = error;
        });
    };
    DashboardComponent.prototype.getmembersaccountdetails = function () {
        var _this = this;
        var inputparams = {
            Membersaccount: [{ Mode: 2, OrganisationCode: this.schoolcode }]
        };
        var serviceurl = "Wcf_VS2015.SVC/Membersaccount";
        this.ComonService.getData(serviceurl, inputparams).subscribe(function (Response) {
            _this.membercount = JSON.parse(JSON.parse(Response.MembersaccountResult)[0].VALUE)[0].MembersCount;
            _this.showactiveuserpiechart = true;
            _this.multi = [
                {
                    "name": "App Users",
                    "value": _this.membercount,
                },
                {
                    "name": "App Not Users",
                    "value": _this.PresentCount - _this.membercount
                }
            ];
        }, function (error) {
            _this.errorMessage = error;
        });
    };
    DashboardComponent.prototype.getfeecollectiondata = function () {
        var _this = this;
        var date = new Date();
        var startdate = this.datepipe.transform(date, "MM/dd/yyyy");
        var todate = new Date(date.setDate(date.getDate() + 1));
        var enddate = this.datepipe.transform(todate, "MM/dd/yyyy");
        var inputparams = {
            FEES: [{ Mode: 2, OCODE: this.schoolcode, FromDate: startdate, ToDate: enddate }]
        };
        var serviceurl = "Wcf_VS2015.SVC/SchoolFeesCollection";
        this.ComonService.getData(serviceurl, inputparams).subscribe(function (Response) {
            if (JSON.parse(Response.SchoolFeesCollectionResult)[0].VALUE) {
                _this.schoolfeecollection = JSON.parse(JSON.parse(Response.SchoolFeesCollectionResult)[0].VALUE)[0].SchoolFeesCollection;
            }
            else {
                _this.schoolfeecollection = 0;
            }
        }, function (error) {
            _this.errorMessage = error;
        });
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'school-dashboard',
            template: __webpack_require__("./src/app/pages/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/pages/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__comon_service_component__["a" /* ComonService */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["d" /* DatePipe */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/pages/feecollection/feecollection.component.html":
/***/ (function(module, exports) {

module.exports = "<school-header></school-header> \n<div class=\"col-xs-9 col-md-10 col-sm-10 col-lg-10 contentwrapper noprint\" id=\"sectionbackground\">\n  <div class=\"row col-xs-12 col-md-12 col-sm-12 col-lg-12 tabstyling pad0\">\n      <label class=\"taskheader\">Fees Collection</label>\n  </div>\n  <div class=\"col-sm-offset-1 col-md-offset-1 col-lg-offset-1 col-sm-10 col-xs-10 col-md-10 col-lg-10 mrgntop\">\n      <div class=\"panel panel-default\">\n          <div class=\"panel-heading\" style=\"background-color: white !important;\">\n              <h6 class=\"assignheader panel-title\">Fee Collection</h6>\n          </div>\n          <div class=\"panel-body\">\n              <div class=\"col-sm-12\">\n                  <div class=\"panel-body\">\n                          <form [formGroup]=\"feecollectionform\" (ngSubmit)=\"onfeedetailsSubmit(feecollectionform)\">\n                      <div class=\"form-group success\" >\n                          <label for=\"usertype\" class=\"req\">Select Class</label>\n                          <select class=\"form-control\" formControlName=\"class\" name=\"selectedclass\" [(ngModel)]=\"selectedclass\" required (change)=\"Onclasschange(selectedclass)\">\n                              <option value={{allclasses.Id}} *ngFor=\"let allclasses of allclasses\">{{allclasses.ClassName}}</option>\n                          </select>\n                          <div *ngIf=\"submitted && feecollectionform.get('class').hasError('required')\" >\n                                  <div class=\"validation_error\" *ngIf=\"feecollectionform.get('class').hasError('required')\">\n                                      Class   is required\n                                      </div>\n                              </div>\n                      </div>\n                      <div class=\"form-group success\">\n                          <label for=\"usertype\" class=\"req\">Select Student</label>\n                          <select class=\"form-control\" formControlName=\"studentcode\" name=\"studentcode\" [(ngModel)]=\"studentcode\" (change)=\"showdetails = false\" required>\n                                  <option value={{allstudents.StudentCode}}   *ngFor=\"let allstudents of allstudents\">{{allstudents.StudentInitial}}{{allstudents.StudentName}}</option>\n                          </select>\n                          <div *ngIf=\"submitted && feecollectionform.get('studentcode').hasError('required')\" >\n                                  <div class=\"validation_error\" *ngIf=\"feecollectionform.get('studentcode').hasError('required')\">\n                                      Student name is required\n                                      </div>\n                              </div>\n                      </div>\n\n                      <div>\n                          <div>\n                              <button class=\"btn btn-info tasksubmitbtn\" name=\"submit\" type=\"submit\"\n                                  value=\"Save\">Submit </button></div>\n                      </div>\n                      </form>\n                  </div>\n              </div>\n              <div class=\"row col-sm-12 col-xs-12 col-md-12 col-lg-12\" *ngIf=\"showdetails\">\n                  <form [formGroup]=\"feecollectionpay\" (ngSubmit)=\"Onpaysubmit(feecollectionpay)\">\n                  <div class=\"col-sm-12 col-xs-12 col-md-12 col-lg-12 list-items-pad\">\n                      <div class=\"col-sm-6 col-xs-6 col-md-6 col-lg-6\">\n                          <div class=\"col-sm-6 col-xs-6 col-md-6 col-lg-6\"> Total Fees (RS)</div>\n                          <div class=\"col-sm-6 col-xs-6 col-md-6 col-lg-6\"> {{totalfee}}</div>\n                      </div>\n                      <div class=\"col-sm-6 col-xs-6 col-md-6 col-lg-6\">\n                              <div class=\"col-sm-6 col-xs-6 col-md-6 col-lg-6\"> Fees Type</div>\n                              <div class=\"col-sm-6 col-xs-6 col-md-6 col-lg-6\"> \n                                      <select class=\"form-control\"  formControlName=\"feetype\" name=\"feetype\" [(ngModel)]=\"feetype\"  required>\n                                              <option value={{i}}   *ngFor=\"let allfeetypes of allfeetypes;let i = index;\">{{allfeetypes.ModuleName}}</option>\n                                      </select>\n                                          <div *ngIf=\"paysubmitted && feecollectionpay.get('feetype').hasError('required')\" >\n                                              <div class=\"validation_error\">\n                                                      Fees Type is required\n                                                  </div>\n                                          </div>\n                              </div>\n                         \n                      </div>\n                  </div>\n                  <div class=\"col-sm-12 col-xs-12 col-md-12 col-lg-12 list-items-pad\">\n                      <div class=\"col-sm-6 col-xs-6 col-md-6 col-lg-6\">\n                          <div class=\"col-sm-6 col-xs-6 col-md-6 col-lg-6\"> Paid (RS)</div>\n                          <div class=\"col-sm-6 col-xs-6 col-md-6 col-lg-6\"> {{paidamount}}</div>\n                      </div>\n                      <div class=\"col-sm-6 col-xs-6 col-md-6 col-lg-6\">\n                              <div class=\"col-sm-6 col-xs-6 col-md-6 col-lg-6\"> Amount (RS)</div>\n                              <div class=\"col-sm-6 col-xs-6 col-md-6 col-lg-6\">\n                                  <input  maxlength=\"10\" class=\"form-control\" formControlName=\"amount\" name=\"amount\"  type=\"number\" required>\n                                  <div *ngIf=\"paysubmitted && feecollectionpay.get('amount').hasError('required')\" >\n                                          <div class=\"validation_error\">\n                                                  Amount (RS) is required\n                                              </div>\n                                      </div>\n                              </div>\n                          \n                      </div>\n                  </div>\n                  <div class=\"col-sm-12 col-xs-12 col-md-12 col-lg-12 list-items-pad\">\n                          <div class=\"col-sm-6 col-xs-6 col-md-6 col-lg-6\">\n                                  <div class=\"col-sm-6 col-xs-6 col-md-6 col-lg-6\"> Fees Concession (RS)</div>\n                                  <div class=\"col-sm-6 col-xs-6 col-md-6 col-lg-6\"> {{concessionamount}}</div>\n                          </div>\n                          <div class=\"col-sm-6 col-xs-6 col-md-6 col-lg-6\">\n                                  <div class=\"col-sm-6 col-xs-6 col-md-6 col-lg-6\"> Collected From</div>\n                                  <div class=\"col-sm-6 col-xs-6 col-md-6 col-lg-6\">\n                                          <input   class=\"form-control\" formControlName=\"collectedfrom\" name=\"collectedfrom\"  type=\"text\" required>\n                                          <div *ngIf=\"paysubmitted && feecollectionpay.get('collectedfrom').hasError('required')\" >\n                                                  <div class=\"validation_error\">\n                                                          Collected From is required\n                                                      </div>\n                                              </div>\n                                  </div>\n                                 \n                          </div>\n                      </div>\n                           <div class=\"col-sm-12 col-xs-12 col-md-12 col-lg-12 list-items-pad\">\n                          <div class=\"col-sm-6 col-xs-6 col-md-6 col-lg-6\">\n                                  <div class=\"col-sm-6 col-xs-6 col-md-6 col-lg-6\"> Due Amount (RS)</div>\n                      <div class=\"col-sm-6 col-xs-6 col-md-6 col-lg-6\"> {{totalfee - paidamount -concessionamount }}</div>\n                          </div>\n                          <div class=\"col-sm-6 col-xs-6 col-md-6 col-lg-6\">\n                                  <div class=\"col-sm-6 col-xs-6 col-md-6 col-lg-6\"> Received By</div>\n                                  <div class=\"col-sm-6 col-xs-6 col-md-6 col-lg-6\"> \n                                          <input   class=\"form-control\" formControlName=\"receivedby\" name=\"receivedby\"  type=\"text\" required>\n                                          <div *ngIf=\"paysubmitted && feecollectionpay.get('receivedby').hasError('required')\" >\n                                                  <div class=\"validation_error\">\n                                                          Received By is required\n                                                      </div>\n                                              </div>\n                                  </div>\n                          </div>\n                      </div>\n                      <div class=\"col-sm-12 col-xs-12 col-md-12 col-lg-12 list-items-pad\">\n                              <div class=\"col-sm-offset-6 col-xs-offset-6 col-lg-offset-6 col-md-offset-6 col-sm-6 col-xs-6 col-md-6 col-lg-6\">\n                                      <div class=\"col-sm-6 col-xs-6 col-md-6 col-lg-6\"> Contact No</div>\n                                  <div class=\"col-sm-6 col-xs-6 col-md-6 col-lg-6\"> \n                                          <input  maxlength=\"10\" class=\"form-control\" formControlName=\"contactno\" name=\"contactno\"  type=\"text\" required>\n                                          <div *ngIf=\"paysubmitted && feecollectionpay.get('contactno').hasError('required')\" >\n                                                  <div class=\"validation_error\">\n                                                          Contact No is required\n                                                      </div>\n                                              </div>\n                                  </div> \n                              </div>\n                          </div>\n                              <div class=\"col-sm-offset-10  col-md-offset-10\">\n                                  <button class=\"btn btn-info fee_submit\" name=\"submit\" \n                                      value=\"Save\" *ngIf=\"!printpage\">Submit </button>\n                                      <!-- <a class=\"print_btn\"  *ngIf=\"printshowbutton\" [routerLink]=\"\" (click)=\"print()\">Print</a> -->\n                                    </div>\n                              </form>\n\n              </div>\n          </div>\n      </div>\n  </div>\n</div>\n<div class=\"row col-lg-12 col-sm-12 col-md-12 col-xs-12 print_body mrgn0 \" *ngIf=\"printpage\" id=\"print-section\">\n        <a class=\"print_btn noprint\"   [routerLink]=\"\" (click)=\"print()\">Print</a>\n        <div class=\" col-lg-12 col-sm-12 col-md-12 col-xs-12 content_border\"  *ngFor=\"let printpagedetails of printpagedetails\">\n      <div class=\"col-xs-12 col-sm-12 col-lg-12 col-md-12 header_border\">\n        <div class=\"col-xs-2  col-sm-2 col-lg-2 col-md-2\">\n          <img class=\"receipt_background\" src={{organizationimage}} />\n        </div>\n        <div class=\"col-xs-10 col-sm-10 col-lg-10 col-md-10 mrgn20 textcenter title_style\">{{Organizationname}} <br /> \n          {{organizationaddress}}</div>\n      </div>\n      <div class=\"college_address\">Fee Receipt </div>\n      <div class=\"col-xs-12 col-sm-12 col-md-12\">\n        <div class=\"col-sm-12 col-xs-12 col-md-12 col-lg-12 pad2\">\n          <div class=\"col-sm-7 col-xs-7 col-md-7 col-lg-7 pad0\">\n            <div class=\"col-sm-6 col-xs-6 col-md-6 col-lg-6 pad0 title_style\"> Name of the Student</div>\n            <div class=\"col-sm-6 col-xs-6 col-md-6 col-lg-6 pad0\">: {{printpagedetails.STUDENTNAME}}</div>\n          </div>\n          <div class=\"col-sm-5 col-xs-5 col-md-5 col-lg-5 pad0\">\n            <div class=\"col-sm-6 col-xs-6 col-md-6 col-lg-6 pad0 title_style\"> Transaction Date</div>\n            <div class=\"col-sm-6 col-xs-6 col-md-6 col-lg-6 pad0\">: {{printpagedetails.CreateOn | date:\"dd/MM/yyyy\"}}</div>\n          </div>\n        </div>\n        <div class=\"col-sm-12 col-xs-12 col-md-12 col-lg-12 pad2\">\n          <div class=\"col-sm-7 col-xs-7 col-md-7 col-lg-7 pad0\">\n            <div class=\"col-sm-6 col-xs-6 col-md-6 col-lg-6 pad0 title_style\"> Class</div>\n            <div class=\"col-sm-6 col-xs-6 col-md-6 col-lg-6 pad0\"> : {{printpagedetails.CLASSNAME}}</div>\n          </div>\n          <div class=\"col-sm-5 col-xs-5 col-md-5 col-lg-5 pad0\">\n            <div class=\"col-sm-6 col-xs-6 col-md-6 col-lg-6 pad0 title_style\"> Receipt No</div>\n            <div class=\"col-sm-6 col-xs-6 col-md-6 col-lg-6 pad0\">: {{receiptnumber}} </div>\n    \n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-12 col-xs-12 col-md-12 col-lg-12\">\n      <table class=\"width100 table-bordered\">\n        <thead>\n          <tr>\n            <th>S.No</th>\n            <th>Particulars</th>\n            <th>Amount(&#8377;)</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>1</td>\n            <td>{{printpagedetails.FEESMODULENAME}}</td>\n            <td>{{printpagedetails.AMOUNT}}</td>\n          </tr>\n          <tr>\n            <td colspan=\"2\" class=\"title_style\">Total</td>\n            <td>{{printpagedetails.AMOUNT}} /-</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <div class=\"col-sm-12 col-xs-12 col-md-12 col-lg-12 pad2 pad15\">\n        <div class=\"col-sm-8 col-xs-8 col-md-8 col-lg-8 pad0\">\n          <div class=\"col-sm-5 col-xs-5 col-md-5 col-lg-5 pad0 title_style\"> Received a sum of Rupees</div>\n          <div class=\"col-sm-7 col-xs-7 col-md-7 col-lg-7 pad0\">: {{currencyinwords}} Only </div>\n        </div>\n        <div class=\"col-sm-4 col-xs-4 col-md-4 col-lg-4 pad0\">\n          <div class=\"col-sm-6 col-xs-6 col-md-6 col-lg-6 pad0 title_style\"> Payment Mode</div>\n          <div class=\"col-sm-6 col-xs-6 col-md-6 col-lg-6 pad0\">: Cash</div>\n        </div>\n      </div>\n      <div class=\"col-sm-12 col-xs-12 col-md-12 col-lg-12 pad2 pad15\">\n          <div class=\"col-sm-7 col-xs-7 col-md-7 col-lg-7 pad0 title_style\">\n             Cashier Signature({{printpagedetails.RECEIVEDBY}})\n          </div>\n          <div class=\"col-sm-5 col-xs-5 col-md-5 col-lg-5 pad0 title_style\">\n            Parent Signature\n          </div>\n        </div>\n        </div>\n        <div class=\" col-lg-12 col-sm-12 col-md-12 col-xs-12 content_border mrgn70\" *ngFor=\"let printpagedetails of printpagedetails\">\n            <div class=\"col-xs-12 col-sm-12 col-lg-12 col-md-12 header_border\">\n              <div class=\"col-xs-2  col-sm-2 col-lg-2 col-md-2\">\n                <img class=\"receipt_background\" src={{organizationimage}} />\n              </div>\n              <div class=\"col-xs-10 col-sm-10 col-lg-10 col-md-10 mrgn20 textcenter title_style\">{{Organizationname}} <br /> \n                {{organizationaddress}}</div>\n            </div>\n            <div class=\"college_address\">Fee Receipt </div>\n            <div class=\"col-xs-12 col-sm-12 col-md-12\">\n              <div class=\"col-sm-12 col-xs-12 col-md-12 col-lg-12 pad2\">\n                <div class=\"col-sm-7 col-xs-7 col-md-7 col-lg-7 pad0\">\n                  <div class=\"col-sm-6 col-xs-6 col-md-6 col-lg-6 pad0 title_style\"> Name of the Student</div>\n                  <div class=\"col-sm-6 col-xs-6 col-md-6 col-lg-6 pad0\">: {{printpagedetails.STUDENTNAME}}</div>\n                </div>\n                <div class=\"col-sm-5 col-xs-5 col-md-5 col-lg-5 pad0\">\n                  <div class=\"col-sm-6 col-xs-6 col-md-6 col-lg-6 pad0 title_style\"> Transaction Date</div>\n                  <div class=\"col-sm-6 col-xs-6 col-md-6 col-lg-6 pad0\">: {{printpagedetails.CreateOn | date:\"dd/MM/yyyy\"}}</div>\n                </div>\n              </div>\n              <div class=\"col-sm-12 col-xs-12 col-md-12 col-lg-12 pad2\">\n                <div class=\"col-sm-7 col-xs-7 col-md-7 col-lg-7 pad0\">\n                  <div class=\"col-sm-6 col-xs-6 col-md-6 col-lg-6 pad0 title_style\"> Parent/Guardian</div>\n                  <div class=\"col-sm-6 col-xs-6 col-md-6 col-lg-6 pad0\"> : {{printpagedetails.PARENTCONTACTNUMBER}}</div>\n                </div>\n                <div class=\"col-sm-5 col-xs-5 col-md-5 col-lg-5 pad0\">\n                  <div class=\"col-sm-6 col-xs-6 col-md-6 col-lg-6 pad0 title_style\"> Receipt No</div>\n                  <div class=\"col-sm-6 col-xs-6 col-md-6 col-lg-6 pad0\">: {{receiptnumber}} </div>\n          \n                </div>\n              </div>\n              <div class=\"col-sm-12 col-xs-12 col-md-12 col-lg-12 pad2\">\n                <div class=\"col-sm-7 col-xs-7 col-md-7 col-lg-7 pad0\">\n                </div>\n                <div class=\"col-sm-5 col-xs-5 col-md-5 col-lg-5 pad0\">\n                  <div class=\"col-sm-6 col-xs-6 col-md-6 col-lg-6 pad0 title_style\"> Class </div>\n                  <div class=\"col-sm-6 col-xs-6 col-md-6 col-lg-6 pad0\">: {{printpagedetails.CLASSNAME}}</div>\n          \n                </div>\n              </div>\n            </div>\n            <div class=\"col-sm-12 col-xs-12 col-md-12 col-lg-12\">\n            <table class=\"width100 table-bordered\">\n              <thead>\n                <tr>\n                  <th>S.No</th>\n                  <th>Particulars</th>\n                  <th>Amount(&#8377;)</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td>1</td>\n                  <td>{{printpagedetails.FEESMODULENAME}}</td>\n                  <td>{{printpagedetails.AMOUNT}}</td>\n                </tr>\n                <tr>\n                  <td colspan=\"2\" class=\"title_style\">Total</td>\n                  <td>{{printpagedetails.AMOUNT}} /-</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n          <div class=\"col-sm-12 col-xs-12 col-md-12 col-lg-12 pad2 pad15\">\n              <div class=\"col-sm-8 col-xs-8 col-md-8 col-lg-8 pad0\">\n                <div class=\"col-sm-5 col-xs-5 col-md-5 col-lg-5 pad0 title_style\"> Received a sum of Rupees</div>\n                <div class=\"col-sm-7 col-xs-7 col-md-7 col-lg-7 pad0\">: {{currencyinwords}} Only</div>\n              </div>\n              <div class=\"col-sm-4 col-xs-4 col-md-4 col-lg-4 pad0\">\n                <div class=\"col-sm-6 col-xs-6 col-md-6 col-lg-6 pad0 title_style\"> Payment Mode</div>\n                <div class=\"col-sm-6 col-xs-6 col-md-6 col-lg-6 pad0\">: Cash</div>\n              </div>\n            </div>\n            <div class=\"col-sm-12 col-xs-12 col-md-12 col-lg-12 pad2 pad15\">\n                <div class=\"col-sm-7 col-xs-7 col-md-7 col-lg-7 pad0 title_style\">\n                   Cashier Signature({{printpagedetails.RECEIVEDBY}})\n                </div>\n                <div class=\"col-sm-5 col-xs-5 col-md-5 col-lg-5 pad0 title_style\">\n                  Parent Signature\n                </div>\n              </div>\n              </div>\n    </div>"

/***/ }),

/***/ "./src/app/pages/feecollection/feecollection.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeecollectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comon_service_component__ = __webpack_require__("./src/app/comon.service.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FeecollectionComponent = /** @class */ (function () {
    function FeecollectionComponent(formbuilder, ComonService) {
        this.formbuilder = formbuilder;
        this.ComonService = ComonService;
        this.submitted = false;
        this.paysubmitted = false;
        this.showdetails = false;
        this.paidamount = 0;
        this.totalfee = 0;
        this.concessionamount = 0;
        this.printpage = false;
        this.a = ['', 'One ', 'Two ', 'Three ', 'Four ', 'Five ', 'Six ', 'Seven ', 'Eight ', 'Nine ', 'Ten ', 'Eleven ', 'Twelve ', 'Thirteen ', 'Fourteen ', 'Fifteen ', 'Sixteen ', 'Seventeen ', 'Eighteen ', 'Nineteen '];
        this.b = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
        this.schoolcode = ComonService.getschoolcode();
    }
    FeecollectionComponent.prototype.ngOnInit = function () {
        this.feecollectionform = this.formbuilder.group({
            class: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            studentcode: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]
        });
        this.feecollectionpay = this.formbuilder.group({
            feetype: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            amount: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            collectedfrom: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            receivedby: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            contactno: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
        });
        this.getclassnames();
        this.changedcurrencytowords(2100);
    };
    FeecollectionComponent.prototype.getclassnames = function () {
        var _this = this;
        var serviceurl = '/Wcf_VS2015.SVC/GetClassNamesbycode';
        var inputparams = {
            SUCCODESenapathi: [{ SCHOOLCode: this.schoolcode }]
        };
        this.ComonService.getData(serviceurl, inputparams).subscribe(function (Response) {
            _this.allclasses = JSON.parse(JSON.parse(Response.GetClassNamesbycodeResult)[0].VALUE);
        }, function (error) {
            _this.errorMessage = error;
            // alert(this.errorMessage);
        });
    };
    FeecollectionComponent.prototype.changedcurrencytowords = function (num) {
        if ((num = num.toString()).length > 9)
            return 'overflow';
        var n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
        if (!n)
            return;
        var amountinwords = '';
        amountinwords += (Number(n[1]) !== 0) ? (this.a[Number(n[1])] || this.b[n[1][0]] + ' ' + this.a[n[1][1]]) + 'Crore ' : '';
        amountinwords += (Number(n[2]) !== 0) ? (this.a[Number(n[2])] || this.b[n[2][0]] + ' ' + this.a[n[2][1]]) + 'Lakh ' : '';
        amountinwords += (Number(n[3]) !== 0) ? (this.a[Number(n[3])] || this.b[n[3][0]] + ' ' + this.a[n[3][1]]) + 'Thousand ' : '';
        amountinwords += (Number(n[4]) !== 0) ? (this.a[Number(n[4])] || this.b[n[4][0]] + ' ' + this.a[n[4][1]]) + 'Hundred ' : '';
        amountinwords += (Number(n[5]) !== 0) ? ((amountinwords != '') ? 'and ' : '') + (this.a[Number(n[5])] || this.b[n[5][0]] + ' ' + this.a[n[5][1]]) + 'only ' : '';
        this.currencyinwords = amountinwords;
    };
    FeecollectionComponent.prototype.Onclasschange = function (id) {
        var _this = this;
        this.studentcode = '';
        this.showdetails = false;
        this.allstudents = [];
        var serviceurl = '/Wcf_VS2015.SVC/GetStudentDetailsByOC';
        var inputparams = { StuOC: [{ SCHOOLCode: this.schoolcode, ClassId: parseInt(id) }] };
        this.ComonService.getData(serviceurl, inputparams).subscribe(function (Response) {
            var resultset = JSON.parse(Response.GetStudentDetailsByOCResult)[0].VALUE;
            if (resultset.includes('Students not yet registered')) {
                _this.allstudents = [];
            }
            else {
                _this.allstudents = JSON.parse(resultset);
            }
        }, function (error) {
            _this.errorMessage = error;
            // alert(this.errorMessage);
        });
    };
    FeecollectionComponent.prototype.getstandards = function (data) {
        var _this = this;
        var inputparams = { Standards: [{ OCODE: this.schoolcode, CLASSID: data.class, SCODE: data.studentcode }] };
        var serviceurl = "/Wcf_VS2015.SVC/GetFeesStandards";
        this.ComonService.getData(serviceurl, inputparams).subscribe(function (Response) {
            // let resultset = JSON.parse(JSON.parse(Response._body));
            console.log(Response);
            var resultset = JSON.parse(Response.GetFeesStandardsResult);
            if (resultset[0].STATUS === 'Success') {
                var feedetails = JSON.parse(resultset[0].VALUE);
                var tot_1 = 0;
                feedetails.map(function (item) {
                    tot_1 += item.Amount;
                });
                _this.totalfee = tot_1;
            }
        }, function (error) {
            _this.errorMessage = error;
            // alert(this.errorMessage);
        });
    };
    FeecollectionComponent.prototype.getstudentfeedetails = function (data) {
        var _this = this;
        var inputparams = { FeesDetails: [{ FromDate: '', ToDate: '', SCODE: data.studentcode }] };
        var serviceurl = "/Wcf_VS2015.SVC/StudentFeeDetils";
        this.ComonService.getData(serviceurl, inputparams).subscribe(function (Response) {
            // let resultset = JSON.parse(JSON.parse(Response._body));
            console.log(Response);
            var resultset = JSON.parse(Response.StudentFeeDetilsResult);
            if (resultset.length > 0) {
                _this.moduleid = resultset[0].MODULEID;
                var tot_2 = 0;
                resultset.map(function (item) {
                    tot_2 += item.TotalAmountPaid;
                });
                _this.paidamount = tot_2;
            }
            else {
                _this.paidamount = 0;
            }
        }, function (error) {
            _this.errorMessage = error;
            // alert(this.errorMessage);
        });
    };
    FeecollectionComponent.prototype.getstudentfeediscount = function (data) {
        var _this = this;
        var inputparams = { Discount: [{ OCODE: this.schoolcode, CLASSID: data.class, SCODE: data.studentcode }] };
        this.classid = data.class;
        this.student_code = data.studentcode;
        var serviceurl = "/Wcf_VS2015.SVC/GetFeesDiscountStandards";
        this.ComonService.getData(serviceurl, inputparams).subscribe(function (Response) {
            // let resultset = JSON.parse(JSON.parse(Response._body));
            console.log(Response);
            var resultset = JSON.parse(Response.GetFeesDiscountStandardsResult);
            if (resultset[0].STATUS === 'Success') {
                var feedetails = JSON.parse(resultset[0].VALUE);
                var tot_3 = 0;
                feedetails.map(function (item) {
                    tot_3 += item.Amount;
                });
                _this.concessionamount = tot_3;
            }
        }, function (error) {
            _this.errorMessage = error;
            // alert(this.errorMessage);
        });
    };
    FeecollectionComponent.prototype.getfeestype = function () {
        var _this = this;
        var inputparams = this.schoolcode;
        var serviceurl = "/Wcf_VS2015.SVC/GetStandardModule/" + inputparams;
        this.ComonService.getmethodData(serviceurl, inputparams).subscribe(function (Response) {
            // let resultset = JSON.parse(JSON.parse(Response._body));
            console.log(Response);
            _this.allfeetypes = JSON.parse(Response.GetStandardModuleResult);
        }, function (error) {
            _this.errorMessage = error;
            // alert(this.errorMessage);
        });
    };
    FeecollectionComponent.prototype.onfeedetailsSubmit = function (data) {
        this.submitted = true;
        this.feetype = '';
        this.allfeetypes = [];
        if (this.feecollectionform.invalid) {
            return;
        }
        this.showdetails = true;
        this.getfeestype();
        this.getstandards(data.value);
        this.getstudentfeediscount(data.value);
        this.getstudentfeedetails(data.value);
    };
    FeecollectionComponent.prototype.Onpaysubmit = function (data) {
        var _this = this;
        this.paysubmitted = true;
        if (this.feecollectionpay.invalid) {
            return;
        }
        var classdetails = { classname: '', classlevel: '' };
        this.allclasses.map(function (item) {
            if (item.Id === parseInt(_this.classid)) {
                classdetails.classname = item.ClassName;
                classdetails.classlevel = item.ClassLevel;
            }
        });
        var studentname = '';
        this.allstudents.map(function (item) {
            if (item.StudentCode === _this.student_code) {
                studentname = item.StudentName;
            }
        });
        var inputparams = { FEES: [{ OCODE: this.schoolcode, CLASSID: this.classid, CLASSNAME: classdetails.classname, CLASSLEVEL: classdetails.classlevel, FEESMODULENAME: this.allfeetypes[data.value.feetype].ModuleName,
                    AMOUNT: data.value.amount, CURRENCY: "Rupees", SCODE: this.student_code, STUDENTNAME: studentname, ID: this.allfeetypes[data.value.feetype].ID, CreateBy: this.schoolcode,
                    CreateOn: "07/17/2019 21:35:01", ModifiedBy: "", ModifiedOn: "", MODULEID: this.moduleid, PARENTCONTACTNUMBER: data.value.contactno,
                    COLLECTEDFROM: data.value.collectedfrom, RECEIVEDBY: data.value.receivedby, DateTime: new Date(), PARENTSIGNATURE: "" }] };
        this.changedcurrencytowords(data.value.amount);
        this.printpagedetails = inputparams.FEES;
        var serviceurl = "/Wcf_VS2015.SVC/FeesPayment";
        this.ComonService.getData(serviceurl, inputparams).subscribe(function (Response) {
            var resultset = JSON.parse(Response.FeesPaymentResult);
            if (resultset[0].STATUS === 'Success') {
                _this.feecollectionpay.reset();
                _this.paysubmitted = false;
                var schooldetails = _this.ComonService.getorganizationdata();
                if (schooldetails) {
                    _this.Organizationname = schooldetails[0].OrganizationName;
                    _this.organizationaddress = schooldetails[0].OrganizationAddress;
                    _this.organizationimage = schooldetails[0].OrganizationPhoto;
                }
                _this.printpage = true;
                _this.receiptnumber = JSON.parse(Response.FeesPaymentResult)[0].VALUE;
            }
            else {
                alert("Payment failed");
            }
            // this.allfeetypes = JSON.parse(Response.FeesPaymentResult);
        }, function (error) {
            _this.errorMessage = error;
            alert(_this.errorMessage);
        });
    };
    FeecollectionComponent.prototype.print = function () {
        window.print();
        this.printpage = false;
    };
    FeecollectionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'school-feecollection',
            template: __webpack_require__("./src/app/pages/feecollection/feecollection.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__comon_service_component__["a" /* ComonService */]])
    ], FeecollectionComponent);
    return FeecollectionComponent;
}());



/***/ }),

/***/ "./src/app/pages/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  footer works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/footer/footer.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'school-footer',
            template: __webpack_require__("./src/app/pages/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/pages/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/pages/getstudentdetails/getstudentdetails.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<school-header></school-header> \r\n<div class=\"col-xs-9 col-md-10 col-sm-10 col-lg-10 contentwrapper noprint\" id=\"sectionbackground\">\r\n  <div class=\"row col-xs-12 col-md-12 col-sm-12 col-lg-12 tabstyling pad0\">\r\n      <label class=\"taskheader\">Get Student Marks</label>\r\n  </div>\r\n  <div class=\"col-sm-offset-1 col-md-offset-1 col-lg-offset-1 col-sm-10 col-xs-10 col-md-10 col-lg-10 mrgntop\">\r\n      <div class=\"panel panel-default\">\r\n          <div class=\"panel-heading\" style=\"background-color: white !important;\">\r\n              <h6 class=\"assignheader panel-title\">Get Student Marks</h6>\r\n          </div>\r\n          <div class=\"panel-body\">\r\n              <div class=\"col-sm-12\" *ngIf=\"!showdetails\">\r\n                  <div class=\"panel-body\">\r\n                          <form [formGroup]=\"getstudentdetails\" (ngSubmit)=\"getstudentsmarks(getstudentdetails)\">\r\n                      <div class=\"form-group success\" >\r\n                          <label for=\"usertype\" class=\"req\">Select Class</label>\r\n                          <select class=\"form-control\" formControlName=\"class\" name=\"selectedclass\" [(ngModel)]=\"selectedclass\" required (change)=\"Onclasschange(selectedclass)\">\r\n                              <option value={{allclasses.Id}} *ngFor=\"let allclasses of allclasses\">{{allclasses.ClassName}}</option>\r\n                          </select>\r\n                          <div *ngIf=\"submitted && getstudentdetails.get('class').hasError('required')\" >\r\n                                  <div class=\"validation_error\" *ngIf=\"getstudentdetails.get('class').hasError('required')\">\r\n                                      Class   is required\r\n                                      </div>\r\n                              </div>\r\n                      </div>\r\n                      <div class=\"form-group success\">\r\n                        <label for=\"usertype\" class=\"req\">Select Student</label>\r\n                        <select class=\"form-control\" formControlName=\"studentcode\" name=\"studentcode\" [(ngModel)]=\"studentcode\" (change)=\"showdetails = false\" required>\r\n                                <option value={{allstudents.StudentCode}}   *ngFor=\"let allstudents of allstudents\">{{allstudents.StudentInitial}}{{allstudents.StudentName}}</option>\r\n                        </select>\r\n                        <div *ngIf=\"submitted && getstudentdetails.get('studentcode').hasError('required')\" >\r\n                                <div class=\"validation_error\" *ngIf=\"getstudentdetails.get('studentcode').hasError('required')\">\r\n                                    Student name is required\r\n                                    </div>\r\n                            </div>\r\n                    </div>\r\n                    <div class=\"form-group success\">\r\n                      <label for=\"usertype\" class=\"req\">Select Exam</label>\r\n                      <select class=\"form-control\" formControlName=\"examdetails\" name=\"examdetails\"  (change)=\"showdetails = false\" required>\r\n                              <option value={{examdetails.ExamTypeName}}   *ngFor=\"let examdetails of examdetails\">{{examdetails.ExamTypeName}}</option>\r\n                      </select>\r\n                      <div *ngIf=\"submitted && getstudentdetails.get('examdetails').hasError('required')\" >\r\n                              <div class=\"validation_error\" *ngIf=\"getstudentdetails.get('examdetails').hasError('required')\">\r\n                                  Exam is required\r\n                                  </div>\r\n                          </div>\r\n                  </div>\r\n\r\n                      <div>\r\n                          <div>\r\n                              <button class=\"btn btn-info tasksubmitbtn\" name=\"submit\" type=\"submit\"\r\n                                  value=\"Save\">Submit </button></div>\r\n                      </div>\r\n                      </form>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row col-lg-12 col-sm-12 col-md-12 col-xs-12 print_body mrgn0 \" *ngIf=\"printpage\" id=\"print-section\">\r\n    <a class=\"print_btn noprint\"   [routerLink]=\"\" (click)=\"print()\">Print</a>\r\n<div class=\" col-lg-12 col-sm-12 col-md-12 col-xs-12 content_border\" >\r\n  <div class=\"col-xs-12 col-sm-12 col-lg-12 col-md-12 header_border\">\r\n    <div class=\"col-xs-2  col-sm-2 col-lg-2 col-md-2\">\r\n      <img class=\"receipt_background\" src={{organizationimage}} />\r\n    </div>\r\n    <div class=\"col-xs-10 col-sm-10 col-lg-10 col-md-10 mrgn20 textcenter title_style\">{{Organizationname}} <br /> \r\n      {{organizationaddress}}</div>\r\n  </div>\r\n    <div class=\"college_address\">Progress Report </div>\r\n    <div class=\"col-xs-12 col-sm-12 col-md-12\">\r\n        <img class=\"student_image receipt_background\" src=\"../assets/images/students.jpg\" />\r\n      <div class=\"col-sm-12 col-xs-12 col-md-12 col-lg-12 pad2\">\r\n        <div class=\"col-sm-7 col-xs-7 col-md-7 col-lg-7 pad0\">\r\n          <div class=\"col-sm-6 col-xs-6 col-md-6 col-lg-6 pad0 title_style\"> Name of the Student</div>\r\n          <div class=\"col-sm-6 col-xs-6 col-md-6 col-lg-6 pad0\">: Chandrakanth</div>\r\n        </div>\r\n        <div class=\"col-sm-5 col-xs-5 col-md-5 col-lg-5 pad0\">\r\n          <div class=\"col-sm-6 col-xs-6 col-md-6 col-lg-6 pad0 title_style\"> Exam Date</div>\r\n          <div class=\"col-sm-6 col-xs-6 col-md-6 col-lg-6 pad0\">: 12/01/2019</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-12 col-xs-12 col-md-12 col-lg-12 pad2\">\r\n        <div class=\"col-sm-7 col-xs-7 col-md-7 col-lg-7 pad0\">\r\n          <div class=\"col-sm-6 col-xs-6 col-md-6 col-lg-6 pad0 title_style\"> Father Name</div>\r\n          <div class=\"col-sm-6 col-xs-6 col-md-6 col-lg-6 pad0\"> : Sreenivasulu</div>\r\n        </div>\r\n        <div class=\"col-sm-5 col-xs-5 col-md-5 col-lg-5 pad0\">\r\n          <div class=\"col-sm-6 col-xs-6 col-md-6 col-lg-6 pad0 title_style\"> Roll No</div>\r\n          <div class=\"col-sm-6 col-xs-6 col-md-6 col-lg-6 pad0\">: 123019343 </div>\r\n  \r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-12 col-xs-12 col-md-12 col-lg-12 pad2\">\r\n          <div class=\"col-sm-7 col-xs-7 col-md-7 col-lg-7 pad0\">\r\n            <div class=\"col-sm-6 col-xs-6 col-md-6 col-lg-6 pad0 title_style\"> Class</div>\r\n            <div class=\"col-sm-6 col-xs-6 col-md-6 col-lg-6 pad0\"> : 8 th class</div>\r\n          </div>\r\n          <div class=\"col-sm-5 col-xs-5 col-md-5 col-lg-5 pad0\">\r\n            <!-- <div class=\"col-sm-6 col-xs-6 col-md-6 col-lg-6 pad0 title_style\"> Roll No</div>\r\n            <div class=\"col-sm-6 col-xs-6 col-md-6 col-lg-6 pad0\">: llflfl </div> -->\r\n    \r\n          </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-sm-12 col-xs-12 col-md-12 col-lg-12\">\r\n    <table class=\"width100 table-bordered\">\r\n      <thead>\r\n        <tr>\r\n          <th>S.No</th>\r\n          <th>Subject</th>\r\n          <th>Max.Marks</th>\r\n          <th>Marks obtain</th>\r\n          <th>Percentage</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td>1</td>\r\n          <td>Maths</td>\r\n          <td>98</td>\r\n          <td>74</td>\r\n          <td>78%</td>\r\n        </tr>\r\n        <tr>\r\n            <td>1</td>\r\n            <td>Maths</td>\r\n            <td>98</td>\r\n            <td>74</td>\r\n            <td>78%</td>\r\n          </tr> <tr>\r\n              <td>1</td>\r\n              <td>Maths</td>\r\n              <td>98</td>\r\n              <td>74</td>\r\n              <td>78%</td>\r\n            </tr> <tr>\r\n                <td>1</td>\r\n                <td>Maths</td>\r\n                <td>98</td>\r\n                <td>74</td>\r\n                <td>78%</td>\r\n              </tr> <tr>\r\n                  <td>1</td>\r\n                  <td>Maths</td>\r\n                  <td>98</td>\r\n                  <td>74</td>\r\n                  <td>78%</td>\r\n                </tr> <tr>\r\n                    <td>1</td>\r\n                    <td>Maths</td>\r\n                    <td>98</td>\r\n                    <td>74</td>\r\n                    <td>78%</td>\r\n                  </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n  <div class=\"col-sm-12 col-xs-12 col-md-12 col-lg-12  college_address pad15\">Subject Marks </div>\r\n  <div class=\"col-sm-12 col-xs-12 col-md-12 col-lg-12 pad2 pad15\">\r\n      <ngx-charts-bar-vertical-2d\r\n      [view]=\"view\"\r\n      [scheme]=\"colorScheme\"\r\n      [results]=\"multi\"\r\n      [gradient]=\"gradient\"\r\n      [xAxis]=\"showXAxis\"\r\n      [yAxis]=\"showYAxis\"\r\n      [legend]=\"showLegend\"\r\n      [showXAxisLabel]=\"showXAxisLabel\"\r\n      [showYAxisLabel]=\"showYAxisLabel\"\r\n      [xAxisLabel]=\"xAxisLabel\"\r\n      [yAxisLabel]=\"yAxisLabel\">\r\n    </ngx-charts-bar-vertical-2d>\r\n      <!-- <div class=\"col-sm-8 col-xs-8 col-md-8 col-lg-8 pad0\">\r\n        <div class=\"col-sm-5 col-xs-5 col-md-5 col-lg-5 pad0 title_style\"> Received a sum of Rupees</div>\r\n        <div class=\"col-sm-7 col-xs-7 col-md-7 col-lg-7 pad0\">: lfllfllf</div>\r\n      </div>\r\n      <div class=\"col-sm-4 col-xs-4 col-md-4 col-lg-4 pad0\">\r\n        <div class=\"col-sm-6 col-xs-6 col-md-6 col-lg-6 pad0 title_style\"> Payment Mode</div>\r\n        <div class=\"col-sm-6 col-xs-6 col-md-6 col-lg-6 pad0\">: Cash</div>\r\n      </div> -->\r\n    </div>\r\n    <div class=\"col-sm-12 col-xs-12 col-md-12 col-lg-12 pad2 pad15\">\r\n     <div class=\"col-sm-4 col-xs-4 col-md-4 col-lg-4 pad0\">\r\n        <div class=\" title_style\"><u>Class Teacher</u></div>\r\n      </div>\r\n     <div class=\"col-sm-4 col-xs-4 col-md-4 col-lg-4 pad0\">\r\n        <div class=\" title_style\"><u>Parent</u> </div>\r\n      </div>\r\n     <div class=\"col-sm-4 col-xs-4 col-md-4 col-lg-4 pad0\">\r\n        <div class=\" title_style\"><u>Principal</u></div>\r\n      </div>\r\n    </div>\r\n   \r\n      </div>\r\n    </div>"

/***/ }),

/***/ "./src/app/pages/getstudentdetails/getstudentdetails.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/getstudentdetails/getstudentdetails.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetstudentdetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comon_service_component__ = __webpack_require__("./src/app/comon.service.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GetstudentdetailsComponent = /** @class */ (function () {
    function GetstudentdetailsComponent(formbuilder, ComonService) {
        this.formbuilder = formbuilder;
        this.ComonService = ComonService;
        this.multi = [
            {
                "name": "Telugu",
                "series": [
                    {
                        "name": "Maximum Marks",
                        "value": 100
                    },
                    {
                        "name": "Minimum Marks",
                        "value": 25
                    },
                    {
                        "name": "Average Marks",
                        "value": 55
                    },
                    {
                        "name": "Obtained Marks",
                        "value": 98
                    }
                ]
            },
            {
                "name": "Maths",
                "series": [
                    {
                        "name": "Maximum Marks",
                        "value": 100
                    },
                    {
                        "name": "Minimum Marks",
                        "value": 97
                    },
                    {
                        "name": "Average Marks",
                        "value": 12
                    },
                    {
                        "name": "Obtained Marks",
                        "value": 94
                    }
                ]
            },
            {
                "name": "English",
                "series": [
                    {
                        "name": "Maximum Marks",
                        "value": 87
                    },
                    {
                        "name": "Minimum Marks",
                        "value": 98
                    },
                    {
                        "name": "Average Marks",
                        "value": 15
                    },
                    {
                        "name": "Obtained Marks",
                        "value": 98
                    }
                ]
            },
            {
                "name": "hindi",
                "series": [
                    {
                        "name": "Maximum Marks",
                        "value": 87
                    },
                    {
                        "name": "Minimum Marks",
                        "value": 98
                    },
                    {
                        "name": "Average Marks",
                        "value": 15
                    },
                    {
                        "name": "Obtained Marks",
                        "value": 98
                    }
                ]
            },
            {
                "name": "chemistry",
                "series": [
                    {
                        "name": "Maximum Marks",
                        "value": 87
                    },
                    {
                        "name": "Minimum Marks",
                        "value": 98
                    },
                    {
                        "name": "Average Marks",
                        "value": 15
                    },
                    {
                        "name": "Obtained Marks",
                        "value": 98
                    }
                ]
            },
            {
                "name": "physics",
                "series": [
                    {
                        "name": "Maximum Marks",
                        "value": 87
                    },
                    {
                        "name": "Minimum Marks",
                        "value": 98
                    },
                    {
                        "name": "Average Marks",
                        "value": 15
                    },
                    {
                        "name": "Obtained Marks",
                        "value": 98
                    }
                ]
            }
        ];
        this.view = [900, 400];
        // options
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegend = true;
        this.showXAxisLabel = true;
        this.xAxisLabel = 'Subject';
        this.showYAxisLabel = true;
        this.yAxisLabel = 'Marks';
        this.printpage = false;
        this.showdetails = false;
        this.submitted = false;
        this.colorScheme = {
            domain: ['#5AA454', '#A10A28', '#C7B42C', '#2388d6']
        };
        this.schoolcode = ComonService.getschoolcode();
    }
    GetstudentdetailsComponent.prototype.getclassnames = function () {
        var _this = this;
        var serviceurl = '/Wcf_VS2015.SVC/GetClassNamesbycode';
        var inputparams = {
            SUCCODESenapathi: [{ SCHOOLCode: this.schoolcode }]
        };
        this.ComonService.getData(serviceurl, inputparams).subscribe(function (Response) {
            _this.allclasses = JSON.parse(JSON.parse(Response.GetClassNamesbycodeResult)[0].VALUE);
        }, function (error) {
            _this.errorMessage = error;
            // alert(this.errorMessage);
        });
    };
    GetstudentdetailsComponent.prototype.Onclasschange = function (id) {
        var _this = this;
        this.studentcode = '';
        this.showdetails = false;
        this.allstudents = [];
        var serviceurl = '/Wcf_VS2015.SVC/GetStudentDetailsByOC';
        var inputparams = { StuOC: [{ SCHOOLCode: this.schoolcode, ClassId: parseInt(id) }] };
        this.ComonService.getData(serviceurl, inputparams).subscribe(function (Response) {
            var resultset = JSON.parse(Response.GetStudentDetailsByOCResult)[0].VALUE;
            if (resultset.includes('Students not yet registered')) {
                _this.allstudents = [];
            }
            else {
                _this.allstudents = JSON.parse(resultset);
            }
        }, function (error) {
            _this.errorMessage = error;
            // alert(this.errorMessage);
        });
    };
    GetstudentdetailsComponent.prototype.print = function () {
        window.print();
        this.printpage = false;
    };
    GetstudentdetailsComponent.prototype.getExamdetails = function () {
        var _this = this;
        var serviceurl = 'Wcf_VS2015.SVC/GetExamTypebyOCODE';
        var inputparams = {
            TOPICM: [{ OrganisationId: this.schoolcode }]
        };
        this.ComonService.getData(serviceurl, inputparams).subscribe(function (Response) {
            _this.examdetails = JSON.parse(Response.GetExamTypebyOCODEResult);
        }, function (error) {
            _this.errorMessage = error;
            // alert(this.errorMessage);
        });
    };
    GetstudentdetailsComponent.prototype.ngOnInit = function () {
        this.getstudentdetails = this.formbuilder.group({
            class: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            studentcode: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            examdetails: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]
        });
        this.getExamdetails();
        this.getclassnames();
        var schooldetails = this.ComonService.getorganizationdata();
        if (schooldetails) {
            this.Organizationname = schooldetails[0].OrganizationName;
            this.organizationaddress = schooldetails[0].OrganizationAddress;
            this.organizationimage = schooldetails[0].OrganizationPhoto;
        }
    };
    GetstudentdetailsComponent.prototype.getstudentsmarks = function (data) {
        this.submitted = true;
        // this.showdetails =true; 
        if (this.getstudentdetails.invalid) {
            return;
        }
        this.printpage = true;
        this.showdetails = true;
    };
    GetstudentdetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'school-getstudentdetails',
            template: __webpack_require__("./src/app/pages/getstudentdetails/getstudentdetails.component.html"),
            styles: [__webpack_require__("./src/app/pages/getstudentdetails/getstudentdetails.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__comon_service_component__["a" /* ComonService */]])
    ], GetstudentdetailsComponent);
    return GetstudentdetailsComponent;
}());



/***/ }),

/***/ "./src/app/pages/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"headerbackground noprint\">\n  <div class=\"row col-xs-12 col-sm-12 col-lg-12 col-md-12\">\n<div class=\"col-xs-2 col-sm-2 col-lg-2 col-md-2 headercolor\"></div>\n<div class=\"col-xs-9 col-sm-9 col-lg-9 col-md-9 headercolor textcenter\">\n    {{Organizationname}}\n<!-- <marquee class=\"updates\">The beautiful thing about learning is that no one can take it away from you.</marquee> -->\n</div>\n<div class=\"col-xs-1 col-sm-1 col-lg-1 col-md-1 pad0 iconspad\">\n    <!-- <span class=\"pad10 glyphicon glyphicon-bell\" ></span>\n<span class=\"labelcount\">9</span>\n  <span class=\"pad10 glyphicon glyphicon-flag\" ></span>\n  <span class=\"labelcount1\">9</span> -->\n  <span class=\"pad10 glyphicon  glyphicon-off\" (click)=\"logout()\"></span>\n</div>\n  </div>\n  <div class=\"row col-xs-12 col-sm-12 col-lg-12 col-md-12 dashboardhide\">\n    <div class=\"col-xs-3 col-md-3 col-sm-3 col-lg-3 pad0\">\n        <div class=\"logindetails\"> Welcome <br >\n         {{loginperson}}\n          </div>\n      <span><img src={{organizationimage}} class=\"loginimage\" /></span>\n    </div>\n  </div>\n</header>\n<div class=\"contentwraperclass col-xs-12 col-md-12 col-sm-12 col-lg-12 noprint\">\n\n  <div class=\"col-xs-12 col-md-12 col-sm-12 col-lg-12 sectionbackground pad0\">\n    <nav style=\"overflow-y: auto;\" class=\"dashboardhide\">\n      <span class=\"dashheading\"> MAIN NAVIGATION</span>\n  <ul class=\"navstyles pad0\">\n   <li><div routerLink=\"/feecollection\" class=\"pad10\">Fee Collection</div></li> <!-- <span class=\"pad10 glyphicon glyphicon glyphicon-usd\" ></span>  -->\n  <li><div routerLink=\"/updatestudentdetails\" class=\"pad10\"> Student Details</div></li> <!--<span class=\"pad10 glyphicon glyphicon-home\" ></span> -->\n  <li><div routerLink=\"/updatestudentmarks\" class=\"pad10\">Student Marks</div></li> <!--<span class=\"pad10 glyphicon glyphicon-home\" ></span>  -->\n  <li><div routerLink=\"/homework\" class=\"pad10\">Home Work</div></li> <!--<span class=\"pad10 glyphicon glyphicon-home\" ></span> -->\n  <li><div routerLink=\"/supportpage\" class=\"pad10\">Support Tickets </div></li> <!--<span class=\"pad10 glyphicon glyphicon-home\" ></span> -->\n  <li><div routerLink=\"/reviews\" class=\"pad10\">Reviews </div></li>\n  <li><div routerLink=\"/remarks\" class=\"pad10\">Remarks</div></li>\n  <li><div routerLink=\"/getstudetdetails\" class=\"pad10\">Get Student Details</div></li>\n  <li><div class=\"pad10\"><a id=\"navcolor\" href=\"http://messenger.providesupport.com/messenger/1m315rihulgh40d6zpbikzcsr4.html \" target=\"_blank\">Live Support </a> </div></li>\n  </ul>  \n</nav>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/pages/header/header.component.scss":
/***/ (function(module, exports) {

module.exports = ".headerbackground {\n  background: linear-gradient(60deg, #1a3d1d, #1a3d1d);\n  height: 216px;\n  width: 100%;\n  border-bottom: 2px solid #1a3d1d;\n  position: absolute;\n  left: 0px;\n  right: 0px; }\n  .headerbackground .headercolor {\n    color: white;\n    padding: 15px 15px;\n    font-size: 18px;\n    line-height: 20px;\n    height: 50px;\n    background-color: transparent; }\n  .headerbackground .updates {\n    font-size: 18px;\n    font-weight: bold;\n    color: white;\n    padding-top: 10px; }\n  .headerbackground .iconspad {\n    padding-top: 15px;\n    padding-left: 70px; }\n  .headerbackground .iconspad span {\n    color: white;\n    font-size: 20px; }\n  .headerbackground .labelcount {\n    position: absolute;\n    top: 7px;\n    right: 143px;\n    font-size: 10px !important;\n    line-height: 15px;\n    background-color: #000;\n    padding: 0 4px;\n    border-radius: 3px;\n    left: 93px;\n    color: white; }\n  .headerbackground .labelcount1 {\n    position: absolute;\n    top: 7px;\n    right: 96px;\n    font-size: 10px !important;\n    line-height: 15px;\n    background-color: #000;\n    padding: 0 4px;\n    border-radius: 3px;\n    left: 139px;\n    color: white; }\n  .headerbackground .pad10 {\n    padding-left: 10px;\n    padding-right: 10px; }\n  .headerbackground .logindetails {\n    position: relative;\n    top: 48px;\n    left: 88px;\n    color: white; }\n  .headerbackground .loginimage {\n    width: 80px;\n    height: 80px;\n    border-radius: 50%;\n    margin-top: 30px;\n    position: relative;\n    bottom: 42px; }\n  .headerbackground .pad00 {\n    padding: 0px !important; }\n  .contentwrapper::-webkit-scrollbar {\n  display: none; }\n  .contentwraperclass {\n  position: relative;\n  top: 215px;\n  margin: 0px;\n  height: 100%;\n  overflow: hidden;\n  padding: 0px; }\n  .contentwraperclass .sectionbackground {\n    background: #3d4c5a;\n    height: 100vh; }\n  .contentwraperclass #sectionbackground {\n    background: #f0f3f5 !important; }\n  .contentwraperclass .dashheading {\n    background: #4a5d6f;\n    font-size: 12px;\n    font-weight: 400;\n    padding: 8px 16px;\n    color: #fff;\n    letter-spacing: 0.5px;\n    padding-left: 40px;\n    padding-right: 119px; }\n  .contentwraperclass .navstyles div {\n    outline: none; }\n  .contentwraperclass .navstyles {\n    list-style-type: none;\n    color: #ccc;\n    font-weight: 400;\n    overflow: hidden;\n    font-size: 16px;\n    padding-top: 20px;\n    cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/pages/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comon_service_component__ = __webpack_require__("./src/app/comon.service.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router, ComonService) {
        this.router = router;
        this.ComonService = ComonService;
        var schooldetails = ComonService.getorganizationdata();
        if (schooldetails) {
            this.Organizationname = schooldetails[0].OrganizationName;
            this.loginperson = schooldetails[0].AuthorisedPersonName;
            this.organizationimage = schooldetails[0].OrganizationPhoto;
        }
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.logout = function () {
        this.router.navigate(['/login']);
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'school-header',
            template: __webpack_require__("./src/app/pages/header/header.component.html"),
            styles: [__webpack_require__("./src/app/pages/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__comon_service_component__["a" /* ComonService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/pages/homeworkpage/homeworkpage.component.html":
/***/ (function(module, exports) {

module.exports = "<school-header></school-header> \n<div class=\"col-xs-9 col-md-10 col-sm-10 col-lg-10 contentwrapper\" id=\"sectionbackground\">\n      <div class=\"row col-xs-12 col-md-12 col-sm-12 col-lg-12 tabstyling pad0\">\n      <label class=\"taskheader\">Home work</label>\n  </div>\n  <div class=\"col-sm-offset-1 col-md-offset-1 col-lg-offset-1 col-sm-10 col-xs-10 col-md-10 col-lg-10 mrgntop\">\n      <div class=\"panel panel-default\">\n          <div class=\"panel-heading\" style=\"background-color: white !important;\">\n              <h6 class=\"assignheader panel-title\">Home work</h6>\n          </div>\n          <div class=\"panel-body\">\n              <div class=\"col-sm-12\">\n                  <div class=\"panel-body\">\n                          <form [formGroup]=\"gethomeworkdetails\" (ngSubmit)=\"updatehomeworkdetails(gethomeworkdetails)\">\n                      <div class=\"form-group success\" >\n                          <label for=\"usertype\" class=\"req\">Select Class</label>\n                          <select class=\"form-control\" formControlName=\"class\"   required >\n                              <option value={{allclasses.Id}} *ngFor=\"let allclasses of allclasses\">{{allclasses.ClassName}}</option>\n                          </select>\n                          <div *ngIf=\"submitted && gethomeworkdetails.get('class').hasError('required')\" >\n                                  <div class=\"validation_error\" *ngIf=\"gethomeworkdetails.get('class').hasError('required')\">\n                                      Class   is required\n                                      </div>\n                              </div>\n                      </div>\n                      <div class=\"form-group success\">\n                          <label for=\"usertype\" class=\"req\">Select Subject</label>\n                          <select class=\"form-control\" formControlName=\"subject\" name=\"subject\"  required>\n                                  <option value={{allsubjects.Id}}   *ngFor=\"let allsubjects of allsubjects\">{{allsubjects.SubjectName}}</option>\n                          </select>\n                          <div *ngIf=\"submitted && gethomeworkdetails.get('subject').hasError('required')\" >\n                                  <div class=\"validation_error\" *ngIf=\"gethomeworkdetails.get('subject').hasError('required')\">\n                                      Subject is required\n                                      </div>\n                              </div>\n                      </div>\n                      <div class=\"form-group success\">\n                          <label for=\"usertype\" class=\"req\">Description</label>\n                          <textarea class=\"form-control\" formControlName=\"description\" required>\n                          </textarea>\n                          <div *ngIf=\"submitted && gethomeworkdetails.get('description').hasError('required')\" >\n                                  <div class=\"validation_error\" *ngIf=\"gethomeworkdetails.get('description').hasError('required')\">\n                                    Description is required\n                                      </div>\n                              </div>\n                      </div>\n                      <div class=\"form-group success\">\n                          <label for=\"usertype\" class=\"req\">Submitted By</label>\n                          <input type=\"text\" class=\"form-control\" formControlName=\"submittedby\" required />\n                          <div *ngIf=\"submitted && gethomeworkdetails.get('submittedby').hasError('required')\" >\n                                  <div class=\"validation_error\" *ngIf=\"gethomeworkdetails.get('submittedby').hasError('required')\">\n                                    Submitted By is required\n                                      </div>\n                              </div>\n                      </div>\n\n                      <div>\n                          <div>\n                              <button class=\"btn btn-info tasksubmitbtn\" name=\"submit\" type=\"submit\"\n                                  value=\"Save\">Submit </button></div>\n                      </div>\n                      </form>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>\n<school-confirmpopup [title]=\"'Message'\" [content]=\"homewroksuccesmessaage\" (submitpopup)=\"closepopup()\" *ngIf=\"showpopup\"></school-confirmpopup>\n"

/***/ }),

/***/ "./src/app/pages/homeworkpage/homeworkpage.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/homeworkpage/homeworkpage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeworkpageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comon_service_component__ = __webpack_require__("./src/app/comon.service.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeworkpageComponent = /** @class */ (function () {
    function HomeworkpageComponent(formbuilder, ComonService) {
        this.formbuilder = formbuilder;
        this.ComonService = ComonService;
        this.submitted = false;
        this.showpopup = false;
        this.schoolcode = ComonService.getschoolcode();
    }
    HomeworkpageComponent.prototype.ngOnInit = function () {
        this.gethomeworkdetails = this.formbuilder.group({
            class: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            subject: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            description: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            submittedby: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
        });
        this.getclassnamesandsubject();
    };
    HomeworkpageComponent.prototype.getclassnamesandsubject = function () {
        var _this = this;
        var serviceurl = '/Wcf_VS2015.SVC/GetClassNamesbycode';
        var getsubjecturl = '/Wcf_VS2015.SVC/GetSubjectbyOCODE';
        var inputparams = {
            SUCCODESenapathi: [{ SCHOOLCode: this.schoolcode }]
        };
        var getsubjectinput = {
            TOPICM: [
                {
                    OrganisationId: this.schoolcode
                }
            ]
        };
        this.ComonService.getData(serviceurl, inputparams).subscribe(function (Response) {
            _this.allclasses = JSON.parse(JSON.parse(Response.GetClassNamesbycodeResult)[0].VALUE);
        }, function (error) {
            _this.errorMessage = error;
            // alert(this.errorMessage);
        });
        this.ComonService.getData(getsubjecturl, getsubjectinput).subscribe(function (Response) {
            _this.allsubjects = JSON.parse(JSON.parse(Response.GetSubjectbyOCODEResult)[0].VALUE);
        }, function (error) {
            _this.errorMessage = error;
            // alert(this.errorMessage);
        });
    };
    HomeworkpageComponent.prototype.updatehomeworkdetails = function (data) {
        var _this = this;
        this.submitted = true;
        if (this.gethomeworkdetails.invalid) {
            return;
        }
        var getclassdetails = this.allclasses.filter(function (item) {
            return (item.Id === parseInt(_this.gethomeworkdetails.value.class));
        });
        var serviceurl = '/Wcf_VS2015.SVC/InsertTopicsM';
        var inputparams = {
            TopicsM: [{ OCODE: this.schoolcode, TID: '800', SCODE: '', Status: this.gethomeworkdetails.value.subject, BCT: 'Student',
                    SENDER: this.gethomeworkdetails.value.submittedby, LID: this.schoolcode, DESCRIPTION: this.gethomeworkdetails.value.description,
                    PDATE: new Date(), EDATE: new Date, AID: 6727, CLASSID: getclassdetails[0].Id, CLASSNAME: getclassdetails[0].ClassName, SIGNATURE: ''
                }]
        };
        this.ComonService.getData(serviceurl, inputparams).subscribe(function (Response) {
            _this.gethomeworkdetails.reset();
            _this.submitted = false;
            _this.showpopup = true;
            _this.homewroksuccesmessaage = "Submitted successfully";
        }, function (error) {
            _this.errorMessage = error;
        });
    };
    HomeworkpageComponent.prototype.closepopup = function () {
        this.showpopup = false;
    };
    HomeworkpageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'school-homeworkpage',
            template: __webpack_require__("./src/app/pages/homeworkpage/homeworkpage.component.html"),
            styles: [__webpack_require__("./src/app/pages/homeworkpage/homeworkpage.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__comon_service_component__["a" /* ComonService */]])
    ], HomeworkpageComponent);
    return HomeworkpageComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loginform\">\n  <div class=\"login-content\">\n    <div class=\"login-body\">\n      <form class=\"loginform\">\n          <span class=\"school-logo\">\n              <img class=\"login_icon_background\" src=\"../assets/images/ic_notification_icon.png\" />\n            </span>\n        <!-- <span class=\"school-logo\">\n          <img class=\"login_icon_background\" src=\"../assets/images/students.jpg\" />\n        </span>\n        <span class=\"title\">\n          Student Unique Card\n        </span> -->\n        <form class=\"mrgn20\" (ngSubmit)=\"Login()\" [formGroup]=\"loginform\">\n          <div class=\"inputname\">\n            <input type=\"text\" formControlName=\"username\" name=\"username\" placeholder=\"Enter User name\" required>\n            <label for=\"username\">User Name</label>\n          </div>\n          <div *ngIf=\"submitted && loginform.get('username').hasError('required')\" >\n              <div class=\"validation_error\" *ngIf=\"loginform.get('username').hasError('required')\">\n                  User Name   is required\n                  </div>\n          </div>\n\n          <div class=\"inputname\">\n            <input type=\"password\" name=\"password\" formControlName=\"password\"  placeholder=\"Password\" required>\n            <label for=\"password\">Password</label>\n          </div>\n          <div *ngIf=\"submitted && loginform.get('password').hasError('required')\" >\n              <div class=\"validation_error\" *ngIf=\"loginform.get('password').hasError('required')\">\n                  Password   is required\n                  </div>\n          </div>\n        <div class=\"textcenter\">\n          <button class=\"login_btn\" type=\"submit\"> Login </button>\n        </div>\n      </form>\n        <div class=\"textcenter\">\n          <a>\n            Forgot Password?\n          </a>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n<school-confirmpopup [title]=\"'Error'\" [content]=\"errorMessage\" *ngIf=\"errormsgshow\" (submitpopup)=\"closepopup()\"></school-confirmpopup>"

/***/ }),

/***/ "./src/app/pages/login/login.component.scss":
/***/ (function(module, exports) {

module.exports = ".loginform {\n  width: 100%;\n  margin: 0 auto; }\n  .loginform .login-content {\n    width: 100%;\n    min-height: 100vh;\n    background-image: url('school_background.b365d552bfd003034a11.jpg');\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    padding: 15px;\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: cover;\n    position: relative;\n    z-index: 1; }\n  .loginform .login-body {\n    width: 338px;\n    border-radius: 10px;\n    overflow: hidden;\n    padding: 0px;\n    background: #e5dcdc;\n    overflow: auto;\n    background-size: 100% 100%;\n    background-repeat: no-repeat; }\n  .loginform .login_btn {\n    background: #5b9161;\n    border: none;\n    border-radius: 6%;\n    padding: 5px 6px 6px 2px;\n    width: 20%;\n    color: white; }\n  .loginform .loginform {\n    width: 100%;\n    position: relative;\n    top: 52%; }\n  .loginform .school-logo {\n    font-size: 60px;\n    color: #333;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    width: 120px;\n    height: 120px;\n    border-radius: 50%;\n    margin: 0 auto; }\n  .loginform .login_icon_background {\n    width: 100px;\n    height: 100px;\n    border-radius: 25%; }\n  .loginform .title {\n    font-family: Poppins-Medium;\n    font-size: 30px;\n    color: #fff;\n    line-height: 1.2;\n    text-align: center;\n    text-transform: uppercase;\n    display: block; }\n  .loginform .inputname {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: reverse;\n        -ms-flex-flow: column-reverse;\n            flex-flow: column-reverse;\n    margin-bottom: 1em; }\n  .loginform label, .loginform input {\n    -webkit-transition: all 0.2s;\n    transition: all 0.2s;\n    -ms-touch-action: manipulation;\n        touch-action: manipulation; }\n  .loginform input {\n    font-size: 12px;\n    border: 0;\n    border-bottom: 1px solid #ccc;\n    font-family: inherit;\n    -webkit-appearance: none;\n    border-radius: 0;\n    padding: 0;\n    cursor: text;\n    height: 40px;\n    width: 80%;\n    margin-left: 35px; }\n  .loginform input:focus {\n    outline: 0;\n    border-bottom: 1px solid #666; }\n  .loginform label {\n    letter-spacing: 0.05em; }\n  .loginform .mrgn20 {\n    margin: 20px 0px 5px 0px; }\n  .loginform .validation_error {\n    color: red;\n    margin-left: 35px; }\n  .loginform input:placeholder-shown + label {\n    cursor: text;\n    max-width: 66.66%;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    -webkit-transform-origin: left bottom;\n            transform-origin: left bottom;\n    -webkit-transform: translate(0, 2.125rem) scale(1.5);\n            transform: translate(0, 2.125rem) scale(1.5);\n    font-size: 12px;\n    opacity: 0;\n    color: #fff; }\n  .loginform input:not(:placeholder-shown) + label,\n  .loginform input:focus + label {\n    -webkit-transform: translate(0, 0) scale(1);\n            transform: translate(0, 0) scale(1);\n    cursor: pointer;\n    opacity: 1;\n    margin-left: 35px;\n    color: #0000; }\n"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__comon_service_component__ = __webpack_require__("./src/app/comon.service.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, formbuilder, ComonService) {
        this.router = router;
        this.formbuilder = formbuilder;
        this.ComonService = ComonService;
        this.submitted = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginform = this.formbuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required]
        });
    };
    LoginComponent.prototype.Login = function () {
        var _this = this;
        this.submitted = true;
        if (this.loginform.invalid) {
            return;
        }
        var inputparams = {
            LoginExec: [{ UCODE: this.loginform.value.username, Password: this.loginform.value.password }]
        };
        var serviceurl = '/Wcf_VS2015.SVC/Login';
        this.ComonService.getData(serviceurl, inputparams).subscribe(function (Response) {
            _this.submitted = false;
            _this.loginform.reset();
            console.log(Response);
            if (Response.LoginResult === 'Fail') {
                _this.errormsgshow = true;
                _this.errorMessage = 'Invalid credentials';
            }
            else {
                var schoolcode = JSON.parse(JSON.parse(Response.LoginResult)[0].VALUE)[0].UCODE;
                _this.ComonService.setschoolcode(schoolcode);
                _this.getSchooldetails(schoolcode);
            }
        }, function (error) {
            _this.errormsgshow = true;
            _this.errorMessage = error;
        });
    };
    LoginComponent.prototype.closepopup = function () {
        this.errormsgshow = false;
    };
    LoginComponent.prototype.getSchooldetails = function (schoolcode) {
        var _this = this;
        var inputparams = {
            SUCCODESenapathi: [{ SCHOOLCode: schoolcode }]
        };
        var serviceurl = '/Wcf_VS2015.SVC/GetSchoolDetailsByscode2';
        this.ComonService.getData(serviceurl, inputparams).subscribe(function (Response) {
            _this.submitted = false;
            var response = JSON.parse(JSON.parse(Response.GetSchoolDetailsByscode2Result)[0].VALUE);
            _this.ComonService.setorganizationdata(response);
            _this.router.navigate(['/dashboard']);
        }, function (error) {
            _this.errorMessage = error;
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'school-login',
            template: __webpack_require__("./src/app/pages/login/login.component.html"),
            styles: [__webpack_require__("./src/app/pages/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__comon_service_component__["a" /* ComonService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/remark/remark.component.html":
/***/ (function(module, exports) {

module.exports = "<school-header></school-header> \n<div class=\"col-xs-9 col-md-10 col-sm-10 col-lg-10 contentwrapper\" id=\"sectionbackground\">\n      <div class=\"row col-xs-12 col-md-12 col-sm-12 col-lg-12 tabstyling pad0\">\n      <label class=\"taskheader\">Remarks</label>\n  </div>\n  <div class=\"col-sm-offset-1 col-md-offset-1 col-lg-offset-1 col-sm-10 col-xs-10 col-md-10 col-lg-10 mrgntop\">\n      <div class=\"panel panel-default\">\n          <div class=\"panel-heading\" style=\"background-color: white !important;\">\n              <h6 class=\"assignheader panel-title\">Remarks</h6>\n          </div>\n          <div class=\"panel-body\">\n              <div class=\"col-sm-12\">\n                  <div class=\"panel-body\">\n                          <form [formGroup]=\"gethomeworkdetails\" (ngSubmit)=\"updatehomeworkdetails(gethomeworkdetails)\">\n                      <div class=\"form-group success\" >\n                          <label for=\"usertype\" class=\"req\">Select Class</label>\n                          <select class=\"form-control\" formControlName=\"class\" name=\"selectedclass\" [(ngModel)]=\"selectedclass\" (change)=\"Onclasschange(selectedclass)\" required >\n                              <option value={{allclasses.Id}} *ngFor=\"let allclasses of allclasses\">{{allclasses.ClassName}}</option>\n                          </select>\n                          <div *ngIf=\"submitted && gethomeworkdetails.get('class').hasError('required')\" >\n                                  <div class=\"validation_error\" *ngIf=\"gethomeworkdetails.get('class').hasError('required')\">\n                                      Class   is required\n                                      </div>\n                              </div>\n                      </div>\n                      <div class=\"form-group success\">\n                          <label for=\"usertype\" class=\"req\">Select Student</label>\n                          <select class=\"form-control\" formControlName=\"studentcode\" name=\"studentcode\" [(ngModel)]=\"studentcode\"  required>\n                                  <option value={{allstudents.StudentCode}}   *ngFor=\"let allstudents of allstudents\">{{allstudents.StudentInitial}}{{allstudents.StudentName}}</option>\n                          </select>\n                          <div *ngIf=\"submitted && gethomeworkdetails.get('studentcode').hasError('required')\" >\n                                  <div class=\"validation_error\" *ngIf=\"gethomeworkdetails.get('studentcode').hasError('required')\">\n                                      Student is required\n                                      </div>\n                              </div>\n                      </div>\n                      <div class=\"form-group success\">\n                          <label for=\"usertype\" class=\"req\">Description</label>\n                          <textarea class=\"form-control\" formControlName=\"description\" required>\n                          </textarea>\n                          <div *ngIf=\"submitted && gethomeworkdetails.get('description').hasError('required')\" >\n                                  <div class=\"validation_error\" *ngIf=\"gethomeworkdetails.get('description').hasError('required')\">\n                                    Description is required\n                                      </div>\n                              </div>\n                      </div>\n                      <div class=\"form-group success\">\n                          <label for=\"usertype\" class=\"req\">Submitted By</label>\n                          <input type=\"text\" class=\"form-control\" formControlName=\"submittedby\" required />\n                          <div *ngIf=\"submitted && gethomeworkdetails.get('submittedby').hasError('required')\" >\n                                  <div class=\"validation_error\" *ngIf=\"gethomeworkdetails.get('submittedby').hasError('required')\">\n                                    Submitted By is required\n                                      </div>\n                              </div>\n                      </div>\n\n                      <div>\n                          <div>\n                              <button class=\"btn btn-info tasksubmitbtn\" name=\"submit\" type=\"submit\"\n                                  value=\"Save\">Submit </button></div>\n                      </div>\n                      </form>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>\n<school-confirmpopup [title]=\"'Message'\" [content]=\"homewroksuccesmessaage\" (submitpopup)=\"closepopup()\" *ngIf=\"showpopup\"></school-confirmpopup>\n"

/***/ }),

/***/ "./src/app/pages/remark/remark.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/remark/remark.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemarkpageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comon_service_component__ = __webpack_require__("./src/app/comon.service.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RemarkpageComponent = /** @class */ (function () {
    function RemarkpageComponent(formbuilder, ComonService) {
        this.formbuilder = formbuilder;
        this.ComonService = ComonService;
        this.submitted = false;
        this.showpopup = false;
        this.schoolcode = ComonService.getschoolcode();
    }
    RemarkpageComponent.prototype.ngOnInit = function () {
        this.gethomeworkdetails = this.formbuilder.group({
            class: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            studentcode: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            description: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            submittedby: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
        });
        this.getclassnames();
    };
    RemarkpageComponent.prototype.getclassnames = function () {
        var _this = this;
        var serviceurl = '/Wcf_VS2015.SVC/GetClassNamesbycode';
        // let getsubjecturl = '/Wcf_VS2015.SVC/GetSubjectbyOCODE';
        var inputparams = {
            SUCCODESenapathi: [{ SCHOOLCode: this.schoolcode }]
        };
        this.ComonService.getData(serviceurl, inputparams).subscribe(function (Response) {
            _this.allclasses = JSON.parse(JSON.parse(Response.GetClassNamesbycodeResult)[0].VALUE);
        }, function (error) {
            _this.errorMessage = error;
        });
    };
    RemarkpageComponent.prototype.Onclasschange = function (id) {
        var _this = this;
        this.studentcode = '';
        this.allstudents = [];
        var serviceurl = '/Wcf_VS2015.SVC/GetStudentDetailsByOC';
        var inputparams = { StuOC: [{ SCHOOLCode: this.schoolcode, ClassId: parseInt(id) }] };
        this.ComonService.getData(serviceurl, inputparams).subscribe(function (Response) {
            var resultset = JSON.parse(Response.GetStudentDetailsByOCResult)[0].VALUE;
            if (resultset.includes('Students not yet registered')) {
                _this.allstudents = [];
            }
            else {
                _this.allstudents = JSON.parse(resultset);
            }
        }, function (error) {
            _this.errorMessage = error;
            // alert(this.errorMessage);
        });
    };
    RemarkpageComponent.prototype.updatehomeworkdetails = function (data) {
        var _this = this;
        this.submitted = true;
        if (this.gethomeworkdetails.invalid) {
            return;
        }
        var getclassdetails = this.allclasses.filter(function (item) {
            return (item.Id === parseInt(_this.gethomeworkdetails.value.class));
        });
        var serviceurl = '/Wcf_VS2015.SVC/InsertTopicsM';
        var inputparams = {
            TopicsM: [{ OCODE: this.schoolcode, TID: '1800', SCODE: this.gethomeworkdetails.value.studentcode, BCT: 'Student',
                    SENDER: this.gethomeworkdetails.value.submittedby, LID: this.schoolcode, DESCRIPTION: this.gethomeworkdetails.value.description,
                    PDATE: new Date(), EDATE: new Date, AID: '', CLASSNAME: getclassdetails[0].ClassName, SIGNATURE: ''
                }]
        };
        this.ComonService.getData(serviceurl, inputparams).subscribe(function (Response) {
            _this.gethomeworkdetails.reset();
            _this.submitted = false;
            _this.showpopup = true;
            _this.homewroksuccesmessaage = "Submitted successfully";
        }, function (error) {
            _this.errorMessage = error;
        });
    };
    RemarkpageComponent.prototype.closepopup = function () {
        this.showpopup = false;
    };
    RemarkpageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'school-remark',
            template: __webpack_require__("./src/app/pages/remark/remark.component.html"),
            styles: [__webpack_require__("./src/app/pages/remark/remark.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__comon_service_component__["a" /* ComonService */]])
    ], RemarkpageComponent);
    return RemarkpageComponent;
}());



/***/ }),

/***/ "./src/app/pages/review/review.component.html":
/***/ (function(module, exports) {

module.exports = "<school-header></school-header> \n<div class=\"col-xs-9 col-md-10 col-sm-10 col-lg-10 contentwrapper\" id=\"sectionbackground\">\n      <div class=\"row col-xs-12 col-md-12 col-sm-12 col-lg-12 tabstyling pad0\">\n      <label class=\"taskheader\">Reviews</label>\n  </div>\n  <div class=\"col-sm-offset-1 col-md-offset-1 col-lg-offset-1 col-sm-10 col-xs-10 col-md-10 col-lg-10 mrgntop\">\n      <div class=\"panel panel-default\">\n          <div class=\"panel-heading\" style=\"background-color: white !important;\">\n              <h6 class=\"assignheader panel-title\">Reviews</h6>\n          </div>\n          <div class=\"panel-body\">\n              <div class=\"col-sm-12\">\n                  <div class=\"panel-body\">\n                          <form [formGroup]=\"gethomeworkdetails\" (ngSubmit)=\"updatehomeworkdetails(gethomeworkdetails)\">\n                      <div class=\"form-group success\" >\n                          <label for=\"usertype\" class=\"req\">Select Class</label>\n                          <select class=\"form-control\" formControlName=\"class\" name=\"selectedclass\" [(ngModel)]=\"selectedclass\" (change)=\"Onclasschange(selectedclass)\" required >\n                              <option value={{allclasses.Id}} *ngFor=\"let allclasses of allclasses\">{{allclasses.ClassName}}</option>\n                          </select>\n                          <div *ngIf=\"submitted && gethomeworkdetails.get('class').hasError('required')\" >\n                                  <div class=\"validation_error\" *ngIf=\"gethomeworkdetails.get('class').hasError('required')\">\n                                      Class   is required\n                                      </div>\n                              </div>\n                      </div>\n                      <div class=\"form-group success\">\n                          <label for=\"usertype\" class=\"req\">Select Student</label>\n                          <select class=\"form-control\" formControlName=\"studentcode\" name=\"studentcode\" [(ngModel)]=\"studentcode\"  required>\n                                  <option value={{allstudents.StudentCode}}   *ngFor=\"let allstudents of allstudents\">{{allstudents.StudentInitial}}{{allstudents.StudentName}}</option>\n                          </select>\n                          <div *ngIf=\"submitted && gethomeworkdetails.get('studentcode').hasError('required')\" >\n                                  <div class=\"validation_error\" *ngIf=\"gethomeworkdetails.get('studentcode').hasError('required')\">\n                                      Student is required\n                                      </div>\n                              </div>\n                      </div>\n                      <div class=\"form-group success\">\n                          <label for=\"usertype\" class=\"req\">Description</label>\n                          <textarea class=\"form-control\" formControlName=\"description\" required>\n                          </textarea>\n                          <div *ngIf=\"submitted && gethomeworkdetails.get('description').hasError('required')\" >\n                                  <div class=\"validation_error\" *ngIf=\"gethomeworkdetails.get('description').hasError('required')\">\n                                    Description is required\n                                      </div>\n                              </div>\n                      </div>\n                      <div class=\"form-group success\">\n                          <label for=\"usertype\" class=\"req\">Submitted By</label>\n                          <input type=\"text\" class=\"form-control\" formControlName=\"submittedby\" required />\n                          <div *ngIf=\"submitted && gethomeworkdetails.get('submittedby').hasError('required')\" >\n                                  <div class=\"validation_error\" *ngIf=\"gethomeworkdetails.get('submittedby').hasError('required')\">\n                                    Submitted By is required\n                                      </div>\n                              </div>\n                      </div>\n\n                      <div>\n                          <div>\n                              <button class=\"btn btn-info tasksubmitbtn\" name=\"submit\" type=\"submit\"\n                                  value=\"Save\">Submit </button></div>\n                      </div>\n                      </form>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>\n<school-confirmpopup [title]=\"'Message'\" [content]=\"homewroksuccesmessaage\" (submitpopup)=\"closepopup()\" *ngIf=\"showpopup\"></school-confirmpopup>\n"

/***/ }),

/***/ "./src/app/pages/review/review.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/review/review.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewpageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comon_service_component__ = __webpack_require__("./src/app/comon.service.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReviewpageComponent = /** @class */ (function () {
    function ReviewpageComponent(formbuilder, ComonService) {
        this.formbuilder = formbuilder;
        this.ComonService = ComonService;
        this.submitted = false;
        this.showpopup = false;
        this.schoolcode = ComonService.getschoolcode();
    }
    ReviewpageComponent.prototype.ngOnInit = function () {
        this.gethomeworkdetails = this.formbuilder.group({
            class: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            studentcode: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            description: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            submittedby: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
        });
        this.getclassnames();
    };
    ReviewpageComponent.prototype.getclassnames = function () {
        var _this = this;
        var serviceurl = '/Wcf_VS2015.SVC/GetClassNamesbycode';
        // let getsubjecturl = '/Wcf_VS2015.SVC/GetSubjectbyOCODE';
        var inputparams = {
            SUCCODESenapathi: [{ SCHOOLCode: this.schoolcode }]
        };
        this.ComonService.getData(serviceurl, inputparams).subscribe(function (Response) {
            _this.allclasses = JSON.parse(JSON.parse(Response.GetClassNamesbycodeResult)[0].VALUE);
        }, function (error) {
            _this.errorMessage = error;
        });
    };
    ReviewpageComponent.prototype.Onclasschange = function (id) {
        var _this = this;
        this.studentcode = '';
        this.allstudents = [];
        var serviceurl = '/Wcf_VS2015.SVC/GetStudentDetailsByOC';
        var inputparams = { StuOC: [{ SCHOOLCode: this.schoolcode, ClassId: parseInt(id) }] };
        this.ComonService.getData(serviceurl, inputparams).subscribe(function (Response) {
            var resultset = JSON.parse(Response.GetStudentDetailsByOCResult)[0].VALUE;
            if (resultset.includes('Students not yet registered')) {
                _this.allstudents = [];
            }
            else {
                _this.allstudents = JSON.parse(resultset);
            }
        }, function (error) {
            _this.errorMessage = error;
            // alert(this.errorMessage);
        });
    };
    ReviewpageComponent.prototype.updatehomeworkdetails = function (data) {
        var _this = this;
        this.submitted = true;
        if (this.gethomeworkdetails.invalid) {
            return;
        }
        var getclassdetails = this.allclasses.filter(function (item) {
            return (item.Id === parseInt(_this.gethomeworkdetails.value.class));
        });
        var serviceurl = '/Wcf_VS2015.SVC/InsertTopicsM';
        var inputparams = {
            TopicsM: [{ OCODE: this.schoolcode, TID: '1801', SCODE: this.gethomeworkdetails.value.studentcode, BCT: 'Student',
                    SENDER: this.gethomeworkdetails.value.submittedby, LID: this.schoolcode, DESCRIPTION: this.gethomeworkdetails.value.description,
                    PDATE: new Date(), EDATE: new Date, AID: '', CLASSNAME: getclassdetails[0].ClassName, SIGNATURE: ''
                }]
        };
        this.ComonService.getData(serviceurl, inputparams).subscribe(function (Response) {
            _this.gethomeworkdetails.reset();
            _this.submitted = false;
            _this.showpopup = true;
            _this.homewroksuccesmessaage = "Submitted successfully";
        }, function (error) {
            _this.errorMessage = error;
        });
    };
    ReviewpageComponent.prototype.closepopup = function () {
        this.showpopup = false;
    };
    ReviewpageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'school-review',
            template: __webpack_require__("./src/app/pages/review/review.component.html"),
            styles: [__webpack_require__("./src/app/pages/review/review.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__comon_service_component__["a" /* ComonService */]])
    ], ReviewpageComponent);
    return ReviewpageComponent;
}());



/***/ }),

/***/ "./src/app/pages/studentdetails/studentdetails.component.html":
/***/ (function(module, exports) {

module.exports = "<school-header></school-header> \n<div class=\"col-xs-9 col-md-10 col-sm-10 col-lg-10 contentwrapper\" id=\"sectionbackground\">\n  <div class=\"row col-xs-12 col-md-12 col-sm-12 col-lg-12 tabstyling pad0\">\n      <label class=\"taskheader\">Student Details</label>\n  </div>\n  <div class=\"col-sm-12 col-xs-12 col-md-12 col-lg-12 mrgntop\">\n      <div class=\"panel panel-default\">\n          <div class=\"panel-heading\" style=\"background-color: white !important;\">\n              <h6 class=\"assignheader panel-title\">Update student details</h6>\n          </div>\n          <div class=\"panel-body\">\n              <div class=\"col-sm-12\">\n                  <div class=\"panel-body\">\n                      <div class=\"form-group success\" >\n                          <label for=\"usertype\" class=\"req\">Select Class</label>\n                          <select class=\"form-control\" name=\"selectedclass\" [(ngModel)]=\"selectedclass\" required (change)=\"showdetails = false\">\n                              <option value={{allclasses.Id}} *ngFor=\"let allclasses of allclasses\">{{allclasses.ClassName}}</option>\n                          </select>\n                          <div *ngIf=\"submitted &&(selectedclass === '' || selectedclass === undefined && selectedclass === null)\" >\n                                  <div class=\"validation_error\">\n                                      Class   is required\n                                      </div>\n                              </div>\n                      </div>\n                      <div>\n                          <div>\n                              <button class=\"btn btn-info tasksubmitbtn\" name=\"submit\" type=\"submit\"\n                                  value=\"Save\" (click)=\"getdetails()\">Submit </button></div>\n                      </div>\n                  </div>\n              </div>\n              <div class=\"row col-sm-12 col-xs-12 col-md-12 col-lg-12 table_body\" *ngIf=\"showdetails\">\n                  <div class=\"table-responsive table_height\">\n                <table class=\"table table-striped table-bordered\">\n                  <thead>\n                    <tr>\n                        <th >Student Initial</th>\n                        <th >Student Name</th>\n                        <th >Parent Name</th>\n                        <th >Address</th>\n                        <th >Contact Number</th>\n                        <th>Date Birth</th>\n                        <th >Update</th>\n                        <th >Delete</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                      <tr *ngFor=\"let studentdetails of studentdetails;let i= index\">\n                          <td>\n                              <input class=\"width20\" type=\"text\" [class.editstyle]=\"i !== editRowId\" [(ngModel)]=\"studentdetails.StudentInitial\" *ngIf=\"i === editRowId ; else viewinitial\" />\n                              <ng-template #viewinitial>\n                                {{studentdetails.StudentInitial}}\n                              </ng-template>\n                            </td>\n                          <td>\n                              <input class=\"table_input_width\" type=\"text\" [class.editstyle]=\"i !== editRowId\" [(ngModel)]=\"studentdetails.StudentName\" *ngIf=\"i === editRowId ; else viewname\" />\n                              <ng-template #viewname>\n                                {{studentdetails.StudentName}}\n                              </ng-template>\n                            </td>\n                          <td>\n                                <input class=\"table_input_width\" type=\"text\" [class.editstyle]=\"i !== editRowId\" [(ngModel)]=\"studentdetails.ParentName\" *ngIf=\"i === editRowId ; else viewparentname\" />\n                                <ng-template #viewparentname>\n                                  {{studentdetails.ParentName}}\n                                </ng-template>\n                            </td>\n                          <td >\n                                <textarea  class=\"table_input_width\"  [class.editstyle]=\"i !== editRowId\" [(ngModel)]=\"studentdetails.Address\" *ngIf=\"i === editRowId ; else viewaddress\">\n                                </textarea>\n                                <ng-template #viewaddress>\n                                  {{studentdetails.Address}}\n                                </ng-template>\n                          <td>\n                                <input class=\"table_input_width\" type=\"text\" [class.editstyle]=\"i !== editRowId\" [(ngModel)]=\"studentdetails.ContactNo\" *ngIf=\"i === editRowId ; else viewcontactnumber\" />\n                                <ng-template #viewcontactnumber>\n                                  {{studentdetails.ContactNo}}\n                                </ng-template>\n                          <td>\n                                <input class=\"table_input_width\" type=\"date\" [class.editstyle]=\"i !== editRowId\" [(ngModel)]=\"studentdetails.DOB\" *ngIf=\"i === editRowId ; else viewdatebirth\" />\n                                <ng-template #viewdatebirth>\n                                  {{studentdetails.DOB}}\n                                </ng-template>\n                          </td>\n                          <td>\n                              <span class=\"glyphicon glyphicon-pencil\" *ngIf=\"i !== editRowId\" (click)=\"edit(i)\"></span>\n                              <span  class=\"glyphicon glyphicon-ok\" *ngIf=\"i === editRowId\" (click)=\"savedata(studentdetails)\"></span>\n                          </td>\n                          <td><span class=\"glyphicon glyphicon-trash\" (click)=\"removeItem(studentdetails)\"></span></td>\n  \n                      </tr>\n                  </tbody>\n                </table>\n                </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/studentdetails/studentdetails.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentdetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__comon_service_component__ = __webpack_require__("./src/app/comon.service.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StudentdetailsComponent = /** @class */ (function () {
    function StudentdetailsComponent(ComonService, DatePipe) {
        this.ComonService = ComonService;
        this.DatePipe = DatePipe;
        this.submitted = false;
        this.showdetails = false;
        this.schoolcode = ComonService.getschoolcode();
    }
    StudentdetailsComponent.prototype.ngOnInit = function () {
        this.getclassnames();
    };
    StudentdetailsComponent.prototype.getclassnames = function () {
        var _this = this;
        var serviceurl = '/Wcf_VS2015.SVC/GetClassNamesbycode';
        var inputparams = {
            SUCCODESenapathi: [{ SCHOOLCode: this.schoolcode }]
        };
        this.ComonService.getData(serviceurl, inputparams).subscribe(function (Response) {
            _this.allclasses = JSON.parse(JSON.parse(Response.GetClassNamesbycodeResult)[0].VALUE);
        }, function (error) {
            _this.errorMessage = error;
            // alert(this.errorMessage);
        });
    };
    StudentdetailsComponent.prototype.getdetails = function () {
        var _this = this;
        if (this.selectedclass) {
            this.submitted = true;
            this.showdetails = true;
            var serviceurl = '/Wcf_VS2015.SVC/GetStudentDetailsbySC';
            var inputparams = { SUCCODESenapathi: [{ OrganisationCode: this.schoolcode, ClassId: this.selectedclass }] };
            this.ComonService.getData(serviceurl, inputparams).subscribe(function (Response) {
                _this.studentdetails = JSON.parse(Response.GetStudentDetailsbySCResult);
                _this.studentdetails.map(function (item) {
                    var temp = item.DOB.split('(')[1].split(")")[0];
                    item.DOB = _this.DatePipe.transform(temp, "dd/MM/yyyy");
                });
                console.log(Response);
            }, function (error) {
                _this.errorMessage = error;
                // alert(this.errorMessage);
            });
        }
    };
    StudentdetailsComponent.prototype.savedata = function (data) {
        var _this = this;
        var serviceurl = '/Wcf_VS2015.SVC/UpdateStudentDetails';
        data.OrganisationCode = this.schoolcode;
        data.ClassId = this.selectedclass;
        data.Name = data.ParentName;
        delete data.ParentName;
        if (data.DOB instanceof Date) {
            data.DOB = this.DatePipe.transform(data.DOB, "MM/dd/yyyy");
        }
        var inputparams = { "SUCCODESenapathi": [
                data
            ] };
        this.ComonService.getData(serviceurl, inputparams).subscribe(function (Response) {
            // this.studentdetails = JSON.parse(Response.GetStudentDetailsbySCResult);
            console.log(Response);
            _this.getdetails();
        }, function (error) {
            _this.errorMessage = error;
            // alert(this.errorMessage);
        });
        this.editRowId = '';
    };
    StudentdetailsComponent.prototype.edit = function (val) {
        this.editRowId = val;
    };
    StudentdetailsComponent.prototype.removeItem = function (data) {
        var _this = this;
        var serviceurl = '/Wcf_VS2015.SVC/DeleteStudent';
        var details = { OrganisationCode: '', ClassId: '', StudentCode: '' };
        details.OrganisationCode = this.schoolcode;
        details.ClassId = this.selectedclass;
        details.StudentCode = data.StudentCode;
        var inputparams = {
            SUCCODESenapathi: [
                details
            ]
        };
        this.ComonService.getData(serviceurl, inputparams).subscribe(function (Response) {
            console.log(Response);
            _this.getdetails();
        }, function (error) {
            _this.errorMessage = error;
            // alert(this.errorMessage);
        });
    };
    StudentdetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'school-studentdetails',
            template: __webpack_require__("./src/app/pages/studentdetails/studentdetails.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__comon_service_component__["a" /* ComonService */], __WEBPACK_IMPORTED_MODULE_2__angular_common__["d" /* DatePipe */]])
    ], StudentdetailsComponent);
    return StudentdetailsComponent;
}());



/***/ }),

/***/ "./src/app/pages/supportpage/supportpage.component.html":
/***/ (function(module, exports) {

module.exports = "<school-header></school-header> \n<div class=\"col-xs-9 col-md-10 col-sm-10 col-lg-10 contentwrapper\" id=\"sectionbackground\">\n  <div class=\"row col-xs-12 col-md-12 col-sm-12 col-lg-12 tabstyling pad0\">\n      <label class=\"taskheader\">Support Tickets</label>\n  </div>\n  <div class=\"col-sm-offset-1 col-md-offset-1 col-lg-offset-1 col-sm-10 col-xs-10 col-md-10 col-lg-10 mrgntop\">\n      <div class=\"panel panel-default\">\n          <div class=\"panel-heading\" style=\"background-color: white !important;\">\n              <h6 class=\"assignheader panel-title\">Support Tickets</h6>\n          </div>\n          <div class=\"panel-body\">\n              <div class=\"col-sm-12\">\n                  <div class=\"panel-body\">\n                          <form [formGroup]=\"submitsupportdetails\" (ngSubmit)=\"updatestudentsmarks(submitsupportdetails)\">\n                      <div class=\"form-group success\" >\n                          <label for=\"usertype\" class=\"req\">Issue to</label>\n                          <select class=\"form-control\" formControlName=\"issue\" name=\"issue\"  required >\n                              <option value={{issuedetails}} *ngFor=\"let issuedetails of issuedetails\">{{issuedetails}}</option>\n                          </select>\n                          <div *ngIf=\"submitted && submitsupportdetails.get('issue').hasError('required')\" >\n                                  <div class=\"validation_error\" *ngIf=\"submitsupportdetails.get('issue').hasError('required')\">\n                                      Issue to   is required\n                                      </div>\n                              </div>\n                      </div>\n                      <div class=\"form-group success\">\n                          <label for=\"usertype\" class=\"req\">Raised by</label>\n                          <input type=\"text\" class=\"form-control\" formControlName=\"raisedby\" name=\"raisedby\"  required>\n                          <div *ngIf=\"submitted && submitsupportdetails.get('raisedby').hasError('required')\" >\n                                  <div class=\"validation_error\" *ngIf=\"submitsupportdetails.get('raisedby').hasError('required')\">\n                                      raisedby is required\n                                      </div>\n                              </div>\n                      </div>\n                      <div class=\"form-group success\">\n                          <label for=\"usertype\" class=\"req\">Description</label>\n                          <textarea class=\"form-control\" formControlName=\"description\" required>\n                          </textarea>\n                          <div *ngIf=\"submitted && submitsupportdetails.get('description').hasError('required')\" >\n                                  <div class=\"validation_error\" *ngIf=\"submitsupportdetails.get('description').hasError('required')\">\n                                    Description is required\n                                      </div>\n                              </div>\n                      </div>\n                      <div class=\"form-group success\">\n                          <label for=\"usertype\" class=\"req\">Contact Number</label>\n                          <input type=\"text\" class=\"form-control\" maxlength=\"10\" formControlName=\"contactnumber\" required />\n                          <div *ngIf=\"submitted && submitsupportdetails.get('contactnumber').hasError('required')\" >\n                                  <div class=\"validation_error\" *ngIf=\"submitsupportdetails.get('contactnumber').hasError('required')\">\n                                    Contact Number By is required\n                                      </div>\n                              </div>\n                      </div>\n\n                      <div>\n                          <div>\n                              <button class=\"btn btn-info tasksubmitbtn\" name=\"submit\" type=\"submit\"\n                                  value=\"Save\">Submit </button></div>\n                      </div>\n                      </form>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>\n<school-confirmpopup [title]=\"'Message'\" [content]=\"supportpagesuccesmessaage\" (submitpopup)=\"closepopup()\" *ngIf=\"showpopup\"></school-confirmpopup>"

/***/ }),

/***/ "./src/app/pages/supportpage/supportpage.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/supportpage/supportpage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupportpageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comon_service_component__ = __webpack_require__("./src/app/comon.service.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SupportpageComponent = /** @class */ (function () {
    function SupportpageComponent(formbuilder, ComonService) {
        this.formbuilder = formbuilder;
        this.ComonService = ComonService;
        this.submitted = false;
        this.showpopup = false;
        this.issuedetails = ['Accounts', 'Customer Care', 'Sales', 'Technical', 'New Requirement'];
        this.schoolcode = ComonService.getschoolcode();
    }
    SupportpageComponent.prototype.ngOnInit = function () {
        this.submitsupportdetails = this.formbuilder.group({
            issue: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            raisedby: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            description: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            contactnumber: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
        });
    };
    // getclassnames(){
    //   let serviceurl = '/Wcf_VS2015.SVC/GetClassNamesbycode';
    //   var inputparams =
    //   {
    //     SUCCODESenapathi: [{ "SCHOOLCode": "305456" }]
    //   }
    //   this.ComonService.getData(serviceurl,inputparams).subscribe(
    //     Response =>{
    //      this.issuedetails = JSON.parse(JSON.parse(Response.GetClassNamesbycodeResult)[0].VALUE);
    //     },
    //     error => {
    //       this.errorMessage = <any>error;
    //       // alert(this.errorMessage);
    //     })
    // }
    SupportpageComponent.prototype.updatestudentsmarks = function (data) {
        var _this = this;
        this.submitted = true;
        if (this.submitsupportdetails.invalid) {
            return;
        }
        var inputparams = {
            TICKET: [{
                    LOGINNAME: this.schoolcode, NAME: this.submitsupportdetails.value.raisedby, PEMIIONID: '', OID: this.schoolcode,
                    CONTACTNO: this.submitsupportdetails.value.contactnumber, DESCRIPTION: this.submitsupportdetails.value.description,
                    STTUID: '', STATUS: 'open', CATAGORY: this.submitsupportdetails.value.issue, ISSUERAISEDUSER: '',
                    ISSUEHANDELEDUSER: '', ISSUERAISEDUSERCATAGORY: '', DATETIME: new Date(), SIGNATURE: ''
                }]
        };
        var serviceurl = '/Wcf_VS2015.SVC/TICKET';
        this.ComonService.getData(serviceurl, inputparams).subscribe(function (Response) {
            _this.submitsupportdetails.reset();
            _this.submitted = false;
            _this.showpopup = true;
            _this.supportpagesuccesmessaage = "Ticket submitted successfully and Ticket Number is " + JSON.parse(Response.TICKETResult)[0].VALUE;
        }, function (error) {
            _this.errorMessage = error;
            // alert(this.errorMessage);
        });
    };
    SupportpageComponent.prototype.closepopup = function () {
        this.showpopup = false;
    };
    SupportpageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'school-supportpage',
            template: __webpack_require__("./src/app/pages/supportpage/supportpage.component.html"),
            styles: [__webpack_require__("./src/app/pages/supportpage/supportpage.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__comon_service_component__["a" /* ComonService */]])
    ], SupportpageComponent);
    return SupportpageComponent;
}());



/***/ }),

/***/ "./src/app/pages/updatemarks/updatemarks.component.html":
/***/ (function(module, exports) {

module.exports = "<school-header></school-header> \n<div class=\"col-xs-9 col-md-10 col-sm-10 col-lg-10 contentwrapper\" id=\"sectionbackground\">\n  <div class=\"row col-xs-12 col-md-12 col-sm-12 col-lg-12 tabstyling pad0\">\n      <label class=\"taskheader\">Update Marks</label>\n  </div>\n  <div class=\"col-sm-offset-1 col-md-offset-1 col-lg-offset-1 col-sm-10 col-xs-10 col-md-10 col-lg-10 mrgntop\">\n      <div class=\"panel panel-default\">\n          <div class=\"panel-heading\" style=\"background-color: white !important;\">\n              <h6 class=\"assignheader panel-title\">Update Marks</h6>\n          </div>\n          <div class=\"panel-body\">\n              <div class=\"col-sm-12\" *ngIf=\"!showdetails\">\n                  <div class=\"panel-body\">\n                          <form [formGroup]=\"getexamdetails\" (ngSubmit)=\"updatestudentsmarks(getexamdetails)\">\n                      <div class=\"form-group success\" >\n                          <label for=\"usertype\" class=\"req\">Select Class</label>\n                          <select class=\"form-control\" formControlName=\"class\" name=\"selectedclass\" [(ngModel)]=\"selectedclass\" required (change)=\"Onclasschange(selectedclass)\">\n                              <option value={{allclasses.Id}} *ngFor=\"let allclasses of allclasses\">{{allclasses.ClassName}}</option>\n                          </select>\n                          <div *ngIf=\"submitted && getexamdetails.get('class').hasError('required')\" >\n                                  <div class=\"validation_error\" *ngIf=\"getexamdetails.get('class').hasError('required')\">\n                                      Class   is required\n                                      </div>\n                              </div>\n                      </div>\n                      <div class=\"form-group success\">\n                          <label for=\"usertype\" class=\"req\">Select Exam</label>\n                          <select class=\"form-control\" formControlName=\"examdetails\" name=\"examdetails\"  (change)=\"showdetails = false\" required>\n                                  <option value={{examdetails.Id}}   *ngFor=\"let examdetails of examdetails\">{{examdetails.ExamTypeName}}</option>\n                          </select>\n                          <div *ngIf=\"submitted && getexamdetails.get('examdetails').hasError('required')\" >\n                                  <div class=\"validation_error\" *ngIf=\"getexamdetails.get('examdetails').hasError('required')\">\n                                      Exam is required\n                                      </div>\n                              </div>\n                      </div>\n\n                      <div>\n                          <div>\n                              <button class=\"btn btn-info tasksubmitbtn\" name=\"submit\" type=\"submit\"\n                                  value=\"Save\">Submit </button></div>\n                      </div>\n                      </form>\n                  </div>\n              </div>\n              <div class=\"row col-sm-12 col-xs-12 col-md-12 col-lg-12\" *ngIf=\"showdetails\">    \n                    <div class=\"col-sm-12 col-xs-12 col-md-12 col-lg-12 list-items-pad\">\n                            <div class=\"col-sm-6 col-xs-6 col-md-6 col-lg-6\">\n                                <div class=\"col-sm-6 col-xs-6 col-md-6 col-lg-6\">Class</div>\n                                <div class=\"col-sm-6 col-xs-6 col-md-6 col-lg-6\">LKG</div>\n                            </div>\n                            <div class=\"col-sm-6 col-xs-6 col-md-6 col-lg-6\">\n                                    <div class=\"col-sm-6 col-xs-6 col-md-6 col-lg-6\">Exam Date</div>\n                                    <div class=\"col-sm-6 col-xs-6 col-md-6 col-lg-6\"> 12/07/2019</div>                            \n                            </div>\n                        </div>\n                        <div class=\"col-sm-12 col-xs-12 col-md-12 col-lg-12 list-items-pad\">\n                                <div class=\"col-sm-6 col-xs-6 col-md-6 col-lg-6\">\n                                    <div class=\"col-sm-6 col-xs-6 col-md-6 col-lg-6\">Exam Type</div>\n                                    <div class=\"col-sm-6 col-xs-6 col-md-6 col-lg-6\">Quaterly Exam</div>\n                                </div>\n                            </div>\n                <div class=\"col-sm-12 col-xs-12 col-md-12 col-lg-12 updatemarks_body table-responsive table_height mrgn15\">\n                    <table class=\"col-sm-12 col-xs-12 col-md-12 col-lg-12 table table-striped table-bordered\">\n                      <thead>\n                        <tr>\n                            <th >Student Name</th>\n                            <th >Subject 1</th>\n                            <th >Subject 2</th>\n                            <th >Subject 3</th>\n                            <th >Subject 4</th>\n                            <th >Subject 5</th>\n                            <th >Subject 5</th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                          <tr *ngFor=\"let updatemarks of updatemarks;let i= index\">\n                              <td>{{updatemarks.name}}</td>\n                              <td><input type=\"number\" class=\"marks-row-width\" [class.editstyle]=\"i !== editRowId\" [(ngModel)]=\"updatemarks.Maths\"  /></td>\n                              <td><input type=\"number\" class=\"marks-row-width\" [class.editstyle]=\"i !== editRowId\" [(ngModel)]=\"updatemarks.physics\"  /></td>\n                              <td ><input type=\"number\" class=\"marks-row-width\" [class.editstyle]=\"i !== editRowId\" [(ngModel)]=\"updatemarks.English\"  /></td>\n                              <td><input type=\"number\" [class.editstyle]=\"i !== editRowId\" [(ngModel)]=\"updatemarks.Telugu\" /></td>\n                              <td>\n                                    <input type=\"number\"  class=\"marks-row-width\" [class.editstyle]=\"i !== editRowId\" [(ngModel)]=\"updatemarks.Chemistry\" />\n                              </td> \n                              <td><input type=\"number\" class=\"marks-row-width\" [class.editstyle]=\"i !== editRowId\" [(ngModel)]=\"updatemarks.Hindi\" /></td>\n      \n                          </tr>\n                      </tbody>\n                    </table>\n                    </div>\n                    <div class=\"col-sm-offset-10  col-md-offset-10\">\n                            <button class=\"btn btn-info fee_submit\" name=\"submit\" type=\"submit\"\n                                value=\"Save\">Update Marks </button></div>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/updatemarks/updatemarks.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdatemarksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comon_service_component__ = __webpack_require__("./src/app/comon.service.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UpdatemarksComponent = /** @class */ (function () {
    function UpdatemarksComponent(formbuilder, ComonService) {
        this.formbuilder = formbuilder;
        this.ComonService = ComonService;
        this.submitted = false;
        this.showdetails = false;
        this.updatemarks = [{ name: "chandrakanth", Maths: 90, physics: 89, English: 78, Telugu: 90, Chemistry: 90, Hindi: 80 },
            { name: "chandrakanth", Maths: 90, physics: 89, English: 78, Telugu: 90, Chemistry: 90, Hindi: 80 },
            { name: "chandrakanth", Maths: 90, physics: 89, English: 78, Telugu: 90, Chemistry: 90, Hindi: 80 }];
        this.schoolcode = ComonService.getschoolcode();
    }
    UpdatemarksComponent.prototype.ngOnInit = function () {
        this.getexamdetails = this.formbuilder.group({
            class: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            examdetails: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]
        });
        this.getclassnames();
        this.getExamdetails();
    };
    UpdatemarksComponent.prototype.getclassnames = function () {
        var _this = this;
        var serviceurl = '/Wcf_VS2015.SVC/GetClassNamesbycode';
        var inputparams = {
            SUCCODESenapathi: [{ SCHOOLCode: this.schoolcode }]
        };
        this.ComonService.getData(serviceurl, inputparams).subscribe(function (Response) {
            _this.allclasses = JSON.parse(JSON.parse(Response.GetClassNamesbycodeResult)[0].VALUE);
        }, function (error) {
            _this.errorMessage = error;
            // alert(this.errorMessage);
        });
    };
    UpdatemarksComponent.prototype.getExamdetails = function () {
        var _this = this;
        var serviceurl = 'Wcf_VS2015.SVC/GetExamTypebyOCODE';
        var inputparams = {
            TOPICM: [{ OrganisationId: this.schoolcode }]
        };
        this.ComonService.getData(serviceurl, inputparams).subscribe(function (Response) {
            _this.examdetails = JSON.parse(Response.GetExamTypebyOCODEResult);
        }, function (error) {
            _this.errorMessage = error;
            // alert(this.errorMessage);
        });
    };
    UpdatemarksComponent.prototype.updatestudentsmarks = function (data) {
        var _this = this;
        this.submitted = true;
        // this.showdetails =true; 
        if (this.getexamdetails.invalid) {
            return;
        }
        var serviceurl = 'Wcf_VS2015.SVC/StudentMarks';
        var inputparams = {
            StudentMarks: [{ Mode: 'Marks', ClassId: data.value.class, ExamTypeId: data.value.examdetails }]
        };
        this.ComonService.getData(serviceurl, inputparams).subscribe(function (Response) {
            var result = JSON.parse(Response.StudentMarksResult)[0].VALUE;
            if (result) {
                JSON.parse(JSON.parse(Response.StudentMarksResult)[0].VALUE);
            }
        }, function (error) {
            _this.errorMessage = error;
            // alert(this.errorMessage);
        });
    };
    UpdatemarksComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'school-updatemarks',
            template: __webpack_require__("./src/app/pages/updatemarks/updatemarks.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__comon_service_component__["a" /* ComonService */]])
    ], UpdatemarksComponent);
    return UpdatemarksComponent;
}());



/***/ }),

/***/ "./src/app/popups/confirmpopup/confirmpopup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"popup\" id=\"popup1\">\r\n        <div class=\"title\">{{title}}</div>\r\n        <div class=\"mrgn\">{{content}} </div>\r\n        <button class=\"mrgn btn btn-primary\" (click)=\"onsubmitpopup()\">Ok</button>\r\n      </div>\r\n      "

/***/ }),

/***/ "./src/app/popups/confirmpopup/confirmpopup.component.scss":
/***/ (function(module, exports) {

module.exports = ".popup {\n  display: block;\n  position: fixed;\n  padding: 10px;\n  width: 280px;\n  left: 50%;\n  margin-left: -150px;\n  height: 180px;\n  top: 50%;\n  margin-top: -100px;\n  background: #FFF;\n  z-index: 20; }\n\n.title {\n  text-align: center;\n  font-weight: bold;\n  padding: 10px 0px 10px 0px; }\n\n.mrgn {\n  margin: 10px; }\n\n#popup1 {\n  -webkit-box-shadow: 0px 0px 0px 9999px rgba(0, 0, 0, 0.5);\n  box-shadow: 0px 0px 0px 9999px rgba(0, 0, 0, 0.5); }\n"

/***/ }),

/***/ "./src/app/popups/confirmpopup/confirmpopup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmpopupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConfirmpopupComponent = /** @class */ (function () {
    function ConfirmpopupComponent() {
        this.submitpopup = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    ConfirmpopupComponent.prototype.ngOnInit = function () {
    };
    ConfirmpopupComponent.prototype.onsubmitpopup = function () {
        this.submitpopup.emit('');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ConfirmpopupComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ConfirmpopupComponent.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], ConfirmpopupComponent.prototype, "submitpopup", void 0);
    ConfirmpopupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'school-confirmpopup',
            template: __webpack_require__("./src/app/popups/confirmpopup/confirmpopup.component.html"),
            styles: [__webpack_require__("./src/app/popups/confirmpopup/confirmpopup.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ConfirmpopupComponent);
    return ConfirmpopupComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    apiUrl: 'http://202.143.96.72/Wcf_SUC2015DD/'
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map