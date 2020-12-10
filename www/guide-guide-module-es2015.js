(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["guide-guide-module"],{

/***/ "./node_modules/@ionic-native/geolocation/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@ionic-native/geolocation/index.js ***!
  \*********************************************************/
/*! exports provided: Geolocation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Geolocation", function() { return Geolocation; });
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/__ivy_ngcc__/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var GeolocationOriginal = /** @class */ (function (_super) {
    __extends(GeolocationOriginal, _super);
    function GeolocationOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GeolocationOriginal.prototype.getCurrentPosition = function (options) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordova"])(this, "getCurrentPosition", { "callbackOrder": "reverse" }, arguments); };
    /**
     * Watch the current device's position.  Clear the watch by unsubscribing from
     * Observable changes.
     *
     * ```typescript
     * const subscription = this.geolocation.watchPosition()
     *                               .filter((p) => p.coords !== undefined) //Filter Out Errors
     *                               .subscribe(position => {
     *   console.log(position.coords.longitude + ' ' + position.coords.latitude);
     * });
     *
     * // To stop notifications
     * subscription.unsubscribe();
     * ```
     *
     * @param {GeolocationOptions} options  The [geolocation options](https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions).
     * @returns {Observable<Geoposition | PositionError>} Returns an Observable that notifies with the [position](https://developer.mozilla.org/en-US/docs/Web/API/Position) of the device, or errors.
     */
    GeolocationOriginal.prototype.watchPosition = function (options) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            var watchId = navigator.geolocation.watchPosition(observer.next.bind(observer), observer.next.bind(observer), options);
            return function () { return navigator.geolocation.clearWatch(watchId); };
        });
    };
    GeolocationOriginal.pluginName = "Geolocation";
    GeolocationOriginal.plugin = "cordova-plugin-geolocation";
    GeolocationOriginal.pluginRef = "navigator.geolocation";
    GeolocationOriginal.repo = "https://github.com/apache/cordova-plugin-geolocation";
    GeolocationOriginal.install = "ionic cordova plugin add cordova-plugin-geolocation --variable GEOLOCATION_USAGE_DESCRIPTION=\"To locate you\"";
    GeolocationOriginal.installVariables = ["GEOLOCATION_USAGE_DESCRIPTION"];
    GeolocationOriginal.platforms = ["Amazon Fire OS", "Android", "Browser", "iOS", "Windows"];
    return GeolocationOriginal;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["IonicNativePlugin"]));
var Geolocation = new GeolocationOriginal();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2dlb2xvY2F0aW9uL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7O0lBa0tELCtCQUFpQjs7OztJQVVoRCx3Q0FBa0IsYUFBQyxPQUE0QjtJQUkvQzs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FpQkc7SUFDSCxtQ0FBYSxHQUFiLFVBQWMsT0FBNEI7UUFDeEMsT0FBTyxJQUFJLFVBQVUsQ0FBOEIsVUFBQyxRQUFhO1lBQy9ELElBQU0sT0FBTyxHQUFHLFNBQVMsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUNqRCxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFDNUIsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQzVCLE9BQU8sQ0FDUixDQUFDO1lBQ0YsT0FBTyxjQUFNLE9BQUEsU0FBUyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEVBQXpDLENBQXlDLENBQUM7UUFDekQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7OztzQkE3TUg7RUFvS2lDLGlCQUFpQjtTQUFyQyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmRlY2xhcmUgY29uc3QgbmF2aWdhdG9yOiBhbnk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29vcmRpbmF0ZXMge1xuICAvKipcbiAgICogYSBkb3VibGUgcmVwcmVzZW50aW5nIHRoZSBwb3NpdGlvbidzIGxhdGl0dWRlIGluIGRlY2ltYWwgZGVncmVlcy5cbiAgICovXG4gIGxhdGl0dWRlOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEEgZG91YmxlIHJlcHJlc2VudGluZyB0aGUgcG9zaXRpb24ncyBsb25naXR1ZGUgaW4gZGVjaW1hbCBkZWdyZWVzLlxuICAgKi9cbiAgbG9uZ2l0dWRlOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEEgZG91YmxlIHJlcHJlc2VudGluZyB0aGUgYWNjdXJhY3kgb2YgdGhlIGxhdGl0dWRlIGFuZCBsb25naXR1ZGUgcHJvcGVydGllcyxcbiAgICogZXhwcmVzc2VkIGluIG1ldGVycy5cbiAgICovXG4gIGFjY3VyYWN5OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEEgZG91YmxlIHJlcHJlc2VudGluZyB0aGUgcG9zaXRpb24ncyBhbHRpdHVkZSBpbiBtZXRyZXMsIHJlbGF0aXZlIHRvIHNlYVxuICAgKiBsZXZlbC4gVGhpcyB2YWx1ZSBjYW4gYmUgbnVsbCBpZiB0aGUgaW1wbGVtZW50YXRpb24gY2Fubm90IHByb3ZpZGUgdGhlIGRhdGEuXG4gICAqL1xuICBhbHRpdHVkZTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBBIGRvdWJsZSByZXByZXNlbnRpbmcgdGhlIGFjY3VyYWN5IG9mIHRoZSBhbHRpdHVkZSBleHByZXNzZWQgaW4gbWV0ZXJzLlxuICAgKiBUaGlzIHZhbHVlIGNhbiBiZSBudWxsLlxuICAgKi9cbiAgYWx0aXR1ZGVBY2N1cmFjeTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBBIGRvdWJsZSByZXByZXNlbnRpbmcgdGhlIGRpcmVjdGlvbiBpbiB3aGljaCB0aGUgZGV2aWNlIGlzIHRyYXZlbGluZy4gVGhpc1xuICAgKiB2YWx1ZSwgc3BlY2lmaWVkIGluIGRlZ3JlZXMsIGluZGljYXRlcyBob3cgZmFyIG9mZiBmcm9tIGhlYWRpbmcgdHJ1ZSBub3J0aFxuICAgKiB0aGUgZGV2aWNlIGlzLiAwIGRlZ3JlZXMgcmVwcmVzZW50cyB0cnVlIG5vcnRoLCBhbmQgdGhlIGRpcmVjdGlvbiBpc1xuICAgKiBkZXRlcm1pbmVkIGNsb2Nrd2lzZSAod2hpY2ggbWVhbnMgdGhhdCBlYXN0IGlzIDkwIGRlZ3JlZXMgYW5kIHdlc3QgaXMgMjcwXG4gICAqIGRlZ3JlZXMpLiBJZiBzcGVlZCBpcyAwLCBoZWFkaW5nIGlzIE5hTi4gSWYgdGhlIGRldmljZSBpcyB1bmFibGUgdG8gcHJvdmlkZVxuICAgKiBoZWFkaW5nIGluZm9ybWF0aW9uLCB0aGlzIHZhbHVlIGlzIG51bGwuXG4gICAqL1xuICBoZWFkaW5nOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEEgZG91YmxlIHJlcHJlc2VudGluZyB0aGUgdmVsb2NpdHkgb2YgdGhlIGRldmljZSBpbiBtZXRlcnMgcGVyIHNlY29uZC5cbiAgICogVGhpcyB2YWx1ZSBjYW4gYmUgbnVsbC5cbiAgICovXG4gIHNwZWVkOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2VvcG9zaXRpb24ge1xuICAvKipcbiAgICogQSBDb29yZGluYXRlcyBvYmplY3QgZGVmaW5pbmcgdGhlIGN1cnJlbnQgbG9jYXRpb25cbiAgICovXG4gIGNvb3JkczogQ29vcmRpbmF0ZXM7XG5cbiAgLyoqXG4gICAqIEEgdGltZXN0YW1wIHJlcHJlc2VudGluZyB0aGUgdGltZSBhdCB3aGljaCB0aGUgbG9jYXRpb24gd2FzIHJldHJpZXZlZC5cbiAgICovXG4gIHRpbWVzdGFtcDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBvc2l0aW9uRXJyb3Ige1xuICAvKipcbiAgICogQSBjb2RlIHRoYXQgaW5kaWNhdGVzIHRoZSBlcnJvciB0aGF0IG9jY3VycmVkXG4gICAqL1xuICBjb2RlOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEEgbWVzc2FnZSB0aGF0IGNhbiBkZXNjcmliZSB0aGUgZXJyb3IgdGhhdCBvY2N1cnJlZFxuICAgKi9cbiAgbWVzc2FnZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdlb2xvY2F0aW9uT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBJcyBhIHBvc2l0aXZlIGxvbmcgdmFsdWUgaW5kaWNhdGluZyB0aGUgbWF4aW11bSBhZ2UgaW4gbWlsbGlzZWNvbmRzIG9mIGFcbiAgICogcG9zc2libGUgY2FjaGVkIHBvc2l0aW9uIHRoYXQgaXMgYWNjZXB0YWJsZSB0byByZXR1cm4uIElmIHNldCB0byAwLCBpdFxuICAgKiBtZWFucyB0aGF0IHRoZSBkZXZpY2UgY2Fubm90IHVzZSBhIGNhY2hlZCBwb3NpdGlvbiBhbmQgbXVzdCBhdHRlbXB0IHRvXG4gICAqIHJldHJpZXZlIHRoZSByZWFsIGN1cnJlbnQgcG9zaXRpb24uIElmIHNldCB0byBJbmZpbml0eSB0aGUgZGV2aWNlIG11c3RcbiAgICogcmV0dXJuIGEgY2FjaGVkIHBvc2l0aW9uIHJlZ2FyZGxlc3Mgb2YgaXRzIGFnZS4gRGVmYXVsdDogMC5cbiAgICovXG4gIG1heGltdW1BZ2U/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIElzIGEgcG9zaXRpdmUgbG9uZyB2YWx1ZSByZXByZXNlbnRpbmcgdGhlIG1heGltdW0gbGVuZ3RoIG9mIHRpbWVcbiAgICogKGluIG1pbGxpc2Vjb25kcykgdGhlIGRldmljZSBpcyBhbGxvd2VkIHRvIHRha2UgaW4gb3JkZXIgdG8gcmV0dXJuIGFcbiAgICogcG9zaXRpb24uIFRoZSBkZWZhdWx0IHZhbHVlIGlzIEluZmluaXR5LCBtZWFuaW5nIHRoYXQgZ2V0Q3VycmVudFBvc2l0aW9uKClcbiAgICogd29uJ3QgcmV0dXJuIHVudGlsIHRoZSBwb3NpdGlvbiBpcyBhdmFpbGFibGUuXG4gICAqL1xuICB0aW1lb3V0PzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgdGhlIGFwcGxpY2F0aW9uIHdvdWxkIGxpa2UgdG8gcmVjZWl2ZSB0aGUgYmVzdCBwb3NzaWJsZSByZXN1bHRzLlxuICAgKiBJZiB0cnVlIGFuZCBpZiB0aGUgZGV2aWNlIGlzIGFibGUgdG8gcHJvdmlkZSBhIG1vcmUgYWNjdXJhdGUgcG9zaXRpb24sIGl0XG4gICAqIHdpbGwgZG8gc28uIE5vdGUgdGhhdCB0aGlzIGNhbiByZXN1bHQgaW4gc2xvd2VyIHJlc3BvbnNlIHRpbWVzIG9yIGluY3JlYXNlZFxuICAgKiBwb3dlciBjb25zdW1wdGlvbiAod2l0aCBhIEdQUyBjaGlwIG9uIGEgbW9iaWxlIGRldmljZSBmb3IgZXhhbXBsZSkuIE9uIHRoZVxuICAgKiBvdGhlciBoYW5kLCBpZiBmYWxzZSwgdGhlIGRldmljZSBjYW4gdGFrZSB0aGUgbGliZXJ0eSB0byBzYXZlIHJlc291cmNlcyBieVxuICAgKiByZXNwb25kaW5nIG1vcmUgcXVpY2tseSBhbmQvb3IgdXNpbmcgbGVzcyBwb3dlci4gRGVmYXVsdDogZmFsc2UuXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cbiAgZW5hYmxlSGlnaEFjY3VyYWN5PzogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBAbmFtZSBHZW9sb2NhdGlvblxuICogQHByZW1pZXIgZ2VvbG9jYXRpb25cbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gcHJvdmlkZXMgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGRldmljZSdzIGxvY2F0aW9uLCBzdWNoIGFzIGxhdGl0dWRlIGFuZCBsb25naXR1ZGUuIENvbW1vbiBzb3VyY2VzIG9mIGxvY2F0aW9uIGluZm9ybWF0aW9uIGluY2x1ZGUgR2xvYmFsIFBvc2l0aW9uaW5nIFN5c3RlbSAoR1BTKSBhbmQgbG9jYXRpb24gaW5mZXJyZWQgZnJvbSBuZXR3b3JrIHNpZ25hbHMgc3VjaCBhcyBJUCBhZGRyZXNzLCBSRklELCBXaUZpIGFuZCBCbHVldG9vdGggTUFDIGFkZHJlc3NlcywgYW5kIEdTTS9DRE1BIGNlbGwgSURzLlxuICpcbiAqICBUaGlzIEFQSSBpcyBiYXNlZCBvbiB0aGUgVzNDIEdlb2xvY2F0aW9uIEFQSSBTcGVjaWZpY2F0aW9uLCBhbmQgb25seSBleGVjdXRlcyBvbiBkZXZpY2VzIHRoYXQgZG9uJ3QgYWxyZWFkeSBwcm92aWRlIGFuIGltcGxlbWVudGF0aW9uLlxuICpcbiAqIEZvciBpT1MgeW91IGhhdmUgdG8gYWRkIHRoaXMgY29uZmlndXJhdGlvbiB0byB5b3VyIGNvbmZpZ3VyYXRpb24ueG1sIGZpbGVcbiAqIGBgYHhtbFxuICogPGVkaXQtY29uZmlnIGZpbGU9XCIqLUluZm8ucGxpc3RcIiBtb2RlPVwibWVyZ2VcIiB0YXJnZXQ9XCJOU0xvY2F0aW9uV2hlbkluVXNlVXNhZ2VEZXNjcmlwdGlvblwiPlxuICogICAgPHN0cmluZz5XZSB1c2UgeW91ciBsb2NhdGlvbiBmb3IgZnVsbCBmdW5jdGlvbmFsaXR5IG9mIGNlcnRhaW4gYXBwIGZlYXR1cmVzLjwvc3RyaW5nPlxuICogPC9lZGl0LWNvbmZpZz5cbiAqIGBgYFxuICpcbiAqXG4gKiBAdXNhZ2VcbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBHZW9sb2NhdGlvbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvZ2VvbG9jYXRpb24vbmd4JztcbiAqXG4gKiAuLi5cbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGdlb2xvY2F0aW9uOiBHZW9sb2NhdGlvbikge31cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbigpLnRoZW4oKHJlc3ApID0+IHtcbiAqICAvLyByZXNwLmNvb3Jkcy5sYXRpdHVkZVxuICogIC8vIHJlc3AuY29vcmRzLmxvbmdpdHVkZVxuICogfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gKiAgIGNvbnNvbGUubG9nKCdFcnJvciBnZXR0aW5nIGxvY2F0aW9uJywgZXJyb3IpO1xuICogfSk7XG4gKlxuICogbGV0IHdhdGNoID0gdGhpcy5nZW9sb2NhdGlvbi53YXRjaFBvc2l0aW9uKCk7XG4gKiB3YXRjaC5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAqICAvLyBkYXRhIGNhbiBiZSBhIHNldCBvZiBjb29yZGluYXRlcywgb3IgYW4gZXJyb3IgKGlmIGFuIGVycm9yIG9jY3VycmVkKS5cbiAqICAvLyBkYXRhLmNvb3Jkcy5sYXRpdHVkZVxuICogIC8vIGRhdGEuY29vcmRzLmxvbmdpdHVkZVxuICogfSk7XG4gKiBgYGBcbiAqIEBpbnRlcmZhY2VzXG4gKiBDb29yZGluYXRlc1xuICogR2VvcG9zaXRpb25cbiAqIFBvc2l0aW9uRXJyb3JcbiAqIEdlb2xvY2F0aW9uT3B0aW9uc1xuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0dlb2xvY2F0aW9uJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZ2VvbG9jYXRpb24nLFxuICBwbHVnaW5SZWY6ICduYXZpZ2F0b3IuZ2VvbG9jYXRpb24nLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1nZW9sb2NhdGlvbicsXG4gIGluc3RhbGw6XG4gICAgJ2lvbmljIGNvcmRvdmEgcGx1Z2luIGFkZCBjb3Jkb3ZhLXBsdWdpbi1nZW9sb2NhdGlvbiAtLXZhcmlhYmxlIEdFT0xPQ0FUSU9OX1VTQUdFX0RFU0NSSVBUSU9OPVwiVG8gbG9jYXRlIHlvdVwiJyxcbiAgaW5zdGFsbFZhcmlhYmxlczogWydHRU9MT0NBVElPTl9VU0FHRV9ERVNDUklQVElPTiddLFxuICBwbGF0Zm9ybXM6IFsnQW1hem9uIEZpcmUgT1MnLCAnQW5kcm9pZCcsICdCcm93c2VyJywgJ2lPUycsICdXaW5kb3dzJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEdlb2xvY2F0aW9uIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogR2V0IHRoZSBkZXZpY2UncyBjdXJyZW50IHBvc2l0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0ge0dlb2xvY2F0aW9uT3B0aW9uc30gb3B0aW9ucyAgVGhlIFtnZW9sb2NhdGlvbiBvcHRpb25zXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvUG9zaXRpb25PcHRpb25zKS5cbiAgICogQHJldHVybnMge1Byb21pc2U8R2VvcG9zaXRpb24+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIFtwb3NpdGlvbl0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1Bvc2l0aW9uKSBvZiB0aGUgZGV2aWNlLCBvciByZWplY3RzIHdpdGggYW4gZXJyb3IuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLFxuICB9KVxuICBnZXRDdXJyZW50UG9zaXRpb24ob3B0aW9ucz86IEdlb2xvY2F0aW9uT3B0aW9ucyk6IFByb21pc2U8R2VvcG9zaXRpb24+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogV2F0Y2ggdGhlIGN1cnJlbnQgZGV2aWNlJ3MgcG9zaXRpb24uICBDbGVhciB0aGUgd2F0Y2ggYnkgdW5zdWJzY3JpYmluZyBmcm9tXG4gICAqIE9ic2VydmFibGUgY2hhbmdlcy5cbiAgICpcbiAgICogYGBgdHlwZXNjcmlwdFxuICAgKiBjb25zdCBzdWJzY3JpcHRpb24gPSB0aGlzLmdlb2xvY2F0aW9uLndhdGNoUG9zaXRpb24oKVxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKChwKSA9PiBwLmNvb3JkcyAhPT0gdW5kZWZpbmVkKSAvL0ZpbHRlciBPdXQgRXJyb3JzXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUocG9zaXRpb24gPT4ge1xuICAgKiAgIGNvbnNvbGUubG9nKHBvc2l0aW9uLmNvb3Jkcy5sb25naXR1ZGUgKyAnICcgKyBwb3NpdGlvbi5jb29yZHMubGF0aXR1ZGUpO1xuICAgKiB9KTtcbiAgICpcbiAgICogLy8gVG8gc3RvcCBub3RpZmljYXRpb25zXG4gICAqIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgKiBgYGBcbiAgICpcbiAgICogQHBhcmFtIHtHZW9sb2NhdGlvbk9wdGlvbnN9IG9wdGlvbnMgIFRoZSBbZ2VvbG9jYXRpb24gb3B0aW9uc10oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1Bvc2l0aW9uT3B0aW9ucykuXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPEdlb3Bvc2l0aW9uIHwgUG9zaXRpb25FcnJvcj59IFJldHVybnMgYW4gT2JzZXJ2YWJsZSB0aGF0IG5vdGlmaWVzIHdpdGggdGhlIFtwb3NpdGlvbl0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1Bvc2l0aW9uKSBvZiB0aGUgZGV2aWNlLCBvciBlcnJvcnMuXG4gICAqL1xuICB3YXRjaFBvc2l0aW9uKG9wdGlvbnM/OiBHZW9sb2NhdGlvbk9wdGlvbnMpOiBPYnNlcnZhYmxlPEdlb3Bvc2l0aW9uIHwgUG9zaXRpb25FcnJvcj4ge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZTxHZW9wb3NpdGlvbiB8IFBvc2l0aW9uRXJyb3I+KChvYnNlcnZlcjogYW55KSA9PiB7XG4gICAgICBjb25zdCB3YXRjaElkID0gbmF2aWdhdG9yLmdlb2xvY2F0aW9uLndhdGNoUG9zaXRpb24oXG4gICAgICAgIG9ic2VydmVyLm5leHQuYmluZChvYnNlcnZlciksXG4gICAgICAgIG9ic2VydmVyLm5leHQuYmluZChvYnNlcnZlciksXG4gICAgICAgIG9wdGlvbnNcbiAgICAgICk7XG4gICAgICByZXR1cm4gKCkgPT4gbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmNsZWFyV2F0Y2god2F0Y2hJZCk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/article-preview/article-preview.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/article-preview/article-preview.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<div class=\"content\">\n    <div class=\"head\">\n      <div class=\"icon\">\n        <img src=\"../assets/icon/{{ data.icon }}\" alt=\"{{ data.name }} Icon\">\n      </div>\n\n      <h2>{{ data.name }}</h2>\n    </div>\n\n    <div class=\"text\">\n      <div class=\"close\" (click)=\"close()\">X</div>\n      <p>{{ data.intro }}</p>\n\n      <ion-img src=\"../assets/data/img/{{ data.name }}/{{ data.previmg }}\" alt=\"{{ data.name }} Vorschaubild\"></ion-img>\n\n      <div class=\"routerbtn\">\n        <ion-button (click)=\"route(data.name)\">\n          Mehr erfahren\n        </ion-button>\n      </div>\n    </div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/guide/guide.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/guide/guide.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\" color=\"light\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-title>\n      Digitaler Guide\n    </ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"solid-primary\">\n  <div class=\"map-wrapper\">\n\n    <div class=\"coord\"\n          style=\"{{ setObjectLocation(item.coords) }}\"\n\n          *ngFor=\"let item of data; let i = index\"\n\n          (click)=\"showModal(i)\"\n\n          >\n\n\n    </div>\n\n\n    <div class=\"location\" style=\"right: {{wp}}%; top: {{hp}}%\"></div>\n\n    <img src=\"../assets/map.png\" />\n\n  </div>\n\n\n    <div id=\"ion-padding\">\n      <p>Weite: {{ wp }}%</p>\n      <p>Höhe: {{ hp }}%</p>\n      <p>Latitude: {{ latitude }}</p>\n      <p>Longitude: {{ longitude }}</p>\n    </div>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/components/article-preview/article-preview.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/article-preview/article-preview.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXJ0aWNsZS1wcmV2aWV3L2FydGljbGUtcHJldmlldy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/article-preview/article-preview.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/article-preview/article-preview.component.ts ***!
  \*************************************************************************/
/*! exports provided: ArticlePreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlePreviewComponent", function() { return ArticlePreviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




let ArticlePreviewComponent = class ArticlePreviewComponent {
    constructor(modalCtrl, router) {
        this.modalCtrl = modalCtrl;
        this.router = router;
    }
    close() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.modalCtrl.dismiss();
        });
    }
    ngOnInit() { }
    route(id) {
        this.router.navigate(['/article/', id]);
        this.modalCtrl.dismiss();
    }
};
ArticlePreviewComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ArticlePreviewComponent.propDecorators = {
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
ArticlePreviewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-article-preview',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./article-preview.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/article-preview/article-preview.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./article-preview.component.scss */ "./src/app/components/article-preview/article-preview.component.scss")).default]
    })
], ArticlePreviewComponent);



/***/ }),

/***/ "./src/app/guide/guide-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/guide/guide-routing.module.ts ***!
  \***********************************************/
/*! exports provided: GuidePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuidePageRoutingModule", function() { return GuidePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _guide_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guide.page */ "./src/app/guide/guide.page.ts");




const routes = [
    {
        path: '',
        component: _guide_page__WEBPACK_IMPORTED_MODULE_3__["GuidePage"]
    }
];
let GuidePageRoutingModule = class GuidePageRoutingModule {
};
GuidePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], GuidePageRoutingModule);



/***/ }),

/***/ "./src/app/guide/guide.module.ts":
/*!***************************************!*\
  !*** ./src/app/guide/guide.module.ts ***!
  \***************************************/
/*! exports provided: GuidePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuidePageModule", function() { return GuidePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _guide_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guide-routing.module */ "./src/app/guide/guide-routing.module.ts");
/* harmony import */ var _guide_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./guide.page */ "./src/app/guide/guide.page.ts");







let GuidePageModule = class GuidePageModule {
};
GuidePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _guide_routing_module__WEBPACK_IMPORTED_MODULE_5__["GuidePageRoutingModule"]
        ],
        declarations: [_guide_page__WEBPACK_IMPORTED_MODULE_6__["GuidePage"]]
    })
], GuidePageModule);



/***/ }),

/***/ "./src/app/guide/guide.page.scss":
/*!***************************************!*\
  !*** ./src/app/guide/guide.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2d1aWRlL2d1aWRlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/guide/guide.page.ts":
/*!*************************************!*\
  !*** ./src/app/guide/guide.page.ts ***!
  \*************************************/
/*! exports provided: GuidePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuidePage", function() { return GuidePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_geolocation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/geolocation */ "./node_modules/@ionic-native/geolocation/index.js");
/* harmony import */ var _components_article_preview_article_preview_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/article-preview/article-preview.component */ "./src/app/components/article-preview/article-preview.component.ts");





let GuidePage = class GuidePage {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.getCurrentLocation();
        setInterval(() => this.getCurrentLocation(), 5000);
    }
    getWp() {
        return this.wp;
    }
    getCurrentLocation() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let coords = {
                "leftTop": {
                    "lat": 47.769027,
                    "lon": 8.994262
                },
                "rightBot": {
                    "lat": 47.763431,
                    "lon": 8.999337
                }
            };
            let position = yield _ionic_native_geolocation__WEBPACK_IMPORTED_MODULE_3__["Geolocation"].getCurrentPosition();
            this.latitude = position.coords.latitude;
            this.longitude = position.coords.longitude;
            // this.latitude = 47.767574;
            // this.longitude = 8.996252;
            let height = coords.leftTop.lat - coords.rightBot.lat;
            let width = coords.rightBot.lon - coords.leftTop.lon;
            this.hp = ((coords.leftTop.lat - this.latitude) * 100) / height;
            this.wp = ((coords.rightBot.lon - this.longitude) * 100) / width;
        });
    }
    setObjectLocation(data) {
        let coords = {
            "leftTop": {
                "lat": 47.769027,
                "lon": 8.994262
            },
            "rightBot": {
                "lat": 47.763431,
                "lon": 8.999337
            }
        };
        let height = coords.leftTop.lat - coords.rightBot.lat;
        let width = coords.rightBot.lon - coords.leftTop.lon;
        let ycoord = ((coords.leftTop.lat - data.x) * 100) / height;
        let xcoord = ((coords.rightBot.lon - data.y) * 100) / width;
        return "right:" + xcoord + "%; top:" + ycoord + "%;";
    }
    ngOnInit() {
        fetch('./assets/data/guide.json').then(res => res.json())
            .then(json => {
            this.data = json;
        });
    }
    showModal(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _components_article_preview_article_preview_component__WEBPACK_IMPORTED_MODULE_4__["ArticlePreviewComponent"],
                componentProps: {
                    data: this.data[id]
                },
                // backdropDismiss:false,
                cssClass: 'articleprev'
            });
            yield modal.present();
        });
    }
};
GuidePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
GuidePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-guide',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./guide.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/guide/guide.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./guide.page.scss */ "./src/app/guide/guide.page.scss")).default]
    })
], GuidePage);



/***/ })

}]);
//# sourceMappingURL=guide-guide-module-es2015.js.map