angular.module('encore.ui.quarks')
/**
 * @ngdoc service
 * @name quarks.service:rxVisibilityPathParams
 * @description
 * Returns an object with `name` and `method` params that can
 * be passed to
 * [rxVisibility.addMethod()](https://github.com/rackerlabs/encore-ui/blob/master/src/quarks/rxVisibility
 * /scripts/rxVisibility.js#L22).
 * We register this by default, as it's used by the nav menu we keep in 
 * {@link quarks.service:routesCdnPath routesCdnPath}.
 * 
 * The method is used to check if `{param: 'someParamName'}` is present in the current route.
 * Use it as:
 * <pre>
 * visibility: [ 'rxPathParams', { param: 'userName' } ]
 * </pre>
 */
.factory('rxVisibilityPathParams', function ($routeParams) {
    var pathParams = {
        name:'rxPathParams',
        method: function (scope, args) {
            return !_.isUndefined($routeParams[args.param]);
        }
    };

    return pathParams;
});
