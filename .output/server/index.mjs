globalThis.__nitro_main__ = import.meta.url;
import { n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { a as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs").then((n) => n.a)) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/assets/about-V9yXrxEa.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1064-WPl3h6/9yzZ6VkZas5pnMV22cmk\"",
		"mtime": "2026-10-09T20:19:59.156Z",
		"size": 4196,
		"path": "../public/assets/about-V9yXrxEa.js"
	},
	"/assets/admin-CquG7JpA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a30e-mm8tS7mML7L8nS8l041kqMHqA4g\"",
		"mtime": "2026-10-09T20:19:59.157Z",
		"size": 41742,
		"path": "../public/assets/admin-CquG7JpA.js"
	},
	"/assets/arrow-left-DzGfoyya.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a5-gL+Q/DD23Yv+AwCwHEKwKkyt7dY\"",
		"mtime": "2026-10-09T20:19:59.157Z",
		"size": 165,
		"path": "../public/assets/arrow-left-DzGfoyya.js"
	},
	"/assets/arrow-up-right-5P3aWL8N.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a7-ifEAhKljunYB0c+YjDlu+euHIP8\"",
		"mtime": "2026-10-09T20:19:59.157Z",
		"size": 167,
		"path": "../public/assets/arrow-up-right-5P3aWL8N.js"
	},
	"/assets/auth-CCn13Eb9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"175-Y79b1y8tjl8ZEtZZ3jRJ8cbH7Kc\"",
		"mtime": "2026-10-09T20:19:59.157Z",
		"size": 373,
		"path": "../public/assets/auth-CCn13Eb9.js"
	},
	"/assets/blog-api-BYN_ZSD2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2b0-+WUk2SlRD1Fz61WitjuOPX+mT1Q\"",
		"mtime": "2026-10-09T20:19:59.157Z",
		"size": 688,
		"path": "../public/assets/blog-api-BYN_ZSD2.js"
	},
	"/assets/blog-Cja7QPl1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"104-BdUF4mcjFoHePwGBDAEZkvlGzIY\"",
		"mtime": "2026-10-09T20:19:59.157Z",
		"size": 260,
		"path": "../public/assets/blog-Cja7QPl1.js"
	},
	"/assets/blogs-Bd6gcpOu.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"124-NBS58YLD0hMiv1S8TZnbN7eC4nI\"",
		"mtime": "2026-10-09T20:19:59.158Z",
		"size": 292,
		"path": "../public/assets/blogs-Bd6gcpOu.js"
	},
	"/assets/blogs.index-BMDdqvgK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1ab5-4xtBLkH8wmwPyg9lhPZ6ylXiAug\"",
		"mtime": "2026-10-09T20:19:59.158Z",
		"size": 6837,
		"path": "../public/assets/blogs.index-BMDdqvgK.js"
	},
	"/assets/blogs._slug-AZbdYRAn.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"928-khT2bMjDZA4ifLTWiDCdl+wWCNs\"",
		"mtime": "2026-10-09T20:19:59.158Z",
		"size": 2344,
		"path": "../public/assets/blogs._slug-AZbdYRAn.js"
	},
	"/assets/blogs._slug-pmlMjgp_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"43c-46lGIfF+DnegI+KVFng+qB0kEU0\"",
		"mtime": "2026-10-09T20:19:59.158Z",
		"size": 1084,
		"path": "../public/assets/blogs._slug-pmlMjgp_.js"
	},
	"/assets/clock-ACw3eS8R.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a9-dWH+HC0m4Anf4U52r82nhRvbqdg\"",
		"mtime": "2026-10-09T20:19:59.158Z",
		"size": 169,
		"path": "../public/assets/clock-ACw3eS8R.js"
	},
	"/assets/contact-7KAgartO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"96-lmOOmCEuOOVmjSDwwFavUsjtu5M\"",
		"mtime": "2026-10-09T20:19:59.158Z",
		"size": 150,
		"path": "../public/assets/contact-7KAgartO.js"
	},
	"/assets/Abrar Anan Raiyan-BXmaAZYN.pdf": {
		"type": "application/pdf",
		"etag": "\"118dc-YRqauL0Hdf/EPTxH3jFUhZZcKe0\"",
		"mtime": "2026-10-09T20:19:59.168Z",
		"size": 71900,
		"path": "../public/assets/Abrar Anan Raiyan-BXmaAZYN.pdf"
	},
	"/assets/content-api-DMW3ISD5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"674-WE6aRFKCi46N3QAV4WfZvnKXDeU\"",
		"mtime": "2026-10-09T20:19:59.158Z",
		"size": 1652,
		"path": "../public/assets/content-api-DMW3ISD5.js"
	},
	"/assets/createLucideIcon-Bsi8MwWX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4a4-eUEWWmJoxaJdAMBFcO/tnOMlrIs\"",
		"mtime": "2026-10-09T20:19:59.159Z",
		"size": 1188,
		"path": "../public/assets/createLucideIcon-Bsi8MwWX.js"
	},
	"/assets/createServerFn-BpMUg3rS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9551-E3Z2kqhlFvUX6dgZPdZ22I/unnE\"",
		"mtime": "2026-10-09T20:19:59.159Z",
		"size": 38225,
		"path": "../public/assets/createServerFn-BpMUg3rS.js"
	},
	"/assets/credentials-DG81vt4m.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9a-UUfmHrbve+NCp0rCqB8KxOh4Gu8\"",
		"mtime": "2026-10-09T20:19:59.159Z",
		"size": 154,
		"path": "../public/assets/credentials-DG81vt4m.js"
	},
	"/assets/data-BJrck0e-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"24cf-BcsAoWo8F/vdXMEQn4E7kdZEfc0\"",
		"mtime": "2026-10-09T20:19:59.159Z",
		"size": 9423,
		"path": "../public/assets/data-BJrck0e-.js"
	},
	"/assets/education--INdS-LL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"98-qLU6TOWnZoTucjZFZwzDKAihiQY\"",
		"mtime": "2026-10-09T20:19:59.159Z",
		"size": 152,
		"path": "../public/assets/education--INdS-LL.js"
	},
	"/assets/experience-D2QSNH_d.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"99-M8sKmwI+BoD2JSgHeyjgYk6JAXI\"",
		"mtime": "2026-10-09T20:19:59.160Z",
		"size": 153,
		"path": "../public/assets/experience-D2QSNH_d.js"
	},
	"/assets/footer-kOmoXBfi.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"10d6-UfK8bV6e4LyOEBxfgfQkaW5ectQ\"",
		"mtime": "2026-10-09T20:19:59.160Z",
		"size": 4310,
		"path": "../public/assets/footer-kOmoXBfi.js"
	},
	"/assets/hobbies._id-CXVgsoPC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4d0-4RFQrZR0g2xf1QFzLtmvIepOHfE\"",
		"mtime": "2026-10-09T20:19:59.160Z",
		"size": 1232,
		"path": "../public/assets/hobbies._id-CXVgsoPC.js"
	},
	"/assets/hobbies._id-dyMThYhY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6f4-ZrnTfGDhWXKc0fQ48VjHoNnN4xA\"",
		"mtime": "2026-10-09T20:19:59.164Z",
		"size": 1780,
		"path": "../public/assets/hobbies._id-dyMThYhY.js"
	},
	"/assets/home-page-_KVQOBsZ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"59ec-OHuT9OTT3A4PHKCDFX1LrgK0zDQ\"",
		"mtime": "2026-10-09T20:19:59.165Z",
		"size": 23020,
		"path": "../public/assets/home-page-_KVQOBsZ.js"
	},
	"/assets/index-ySbv-elG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4688c-CogcwRVMDoJc7A9jOBCh1NbyhY8\"",
		"mtime": "2026-10-09T20:19:59.156Z",
		"size": 288908,
		"path": "../public/assets/index-ySbv-elG.js"
	},
	"/assets/leadership-d-cFAuDO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"99-gEBHN3PzTuSRAH8hTEZQ10kOauY\"",
		"mtime": "2026-10-09T20:19:59.165Z",
		"size": 153,
		"path": "../public/assets/leadership-d-cFAuDO.js"
	},
	"/assets/link-S7LRuTfm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4cdc-eREZUwZN7tZw3FTcKg+AWZvkERs\"",
		"mtime": "2026-10-09T20:19:59.165Z",
		"size": 19676,
		"path": "../public/assets/link-S7LRuTfm.js"
	},
	"/assets/login-DP-19qf1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b1b-cBu7GPaVko3+23t6+N5UJIikyZU\"",
		"mtime": "2026-10-09T20:19:59.165Z",
		"size": 2843,
		"path": "../public/assets/login-DP-19qf1.js"
	},
	"/assets/mail-DG1jw-ZL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d5-koDo7i/uHmvpJBdU9Bgr8BQCQg0\"",
		"mtime": "2026-10-09T20:19:59.165Z",
		"size": 213,
		"path": "../public/assets/mail-DG1jw-ZL.js"
	},
	"/assets/matchContext-D3U4xTeB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9b-DwmzeRbgIoGnSal38kX5rMBV8lg\"",
		"mtime": "2026-10-09T20:19:59.166Z",
		"size": 155,
		"path": "../public/assets/matchContext-D3U4xTeB.js"
	},
	"/assets/not-found-i5RsCZif.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"76-Trmr7GZIBZuvfg4uM18tBiRtOXg\"",
		"mtime": "2026-10-09T20:19:59.166Z",
		"size": 118,
		"path": "../public/assets/not-found-i5RsCZif.js"
	},
	"/assets/preload-helper-Bz2bP3gn.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1438-5qRr7tQb5PnNxgoSNkio9GOvpUk\"",
		"mtime": "2026-10-09T20:19:59.166Z",
		"size": 5176,
		"path": "../public/assets/preload-helper-Bz2bP3gn.js"
	},
	"/assets/products-GYSlnJE0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"97-n2k0TI6NTmkT4C64b/aUBJVv/9U\"",
		"mtime": "2026-10-09T20:19:59.166Z",
		"size": 151,
		"path": "../public/assets/products-GYSlnJE0.js"
	},
	"/assets/projects-DQQF9VWv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"97-wWFNMjd9uWpLEFl/ZbOBfHr20kc\"",
		"mtime": "2026-10-09T20:19:59.167Z",
		"size": 151,
		"path": "../public/assets/projects-DQQF9VWv.js"
	},
	"/assets/routes-Om-b7ZPC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"85-0E1Ik0rdsMcbaSu54Bdig26QNfw\"",
		"mtime": "2026-10-09T20:19:59.167Z",
		"size": 133,
		"path": "../public/assets/routes-Om-b7ZPC.js"
	},
	"/assets/sections-BrXTg45Y.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"42b-2U+7W4H4GQmdLHBwg4EauJAgx4Y\"",
		"mtime": "2026-10-09T20:19:59.167Z",
		"size": 1067,
		"path": "../public/assets/sections-BrXTg45Y.js"
	},
	"/assets/raiyan-about-7jhdrrFZ.jpg": {
		"type": "image/jpeg",
		"etag": "\"164e4-15NT4hVAncxoXkIY4tfxBT53rOE\"",
		"mtime": "2026-10-09T20:19:59.168Z",
		"size": 91364,
		"path": "../public/assets/raiyan-about-7jhdrrFZ.jpg"
	},
	"/assets/stories._id-B3NtO62_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4d0-mdAV9NeZuJqZRT1US5H0hF0sXdw\"",
		"mtime": "2026-10-09T20:19:59.168Z",
		"size": 1232,
		"path": "../public/assets/stories._id-B3NtO62_.js"
	},
	"/assets/stories._id-VfQQ5ew1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6fc-UauGi9EomGFr8k1Fb9YPVDaOiuw\"",
		"mtime": "2026-10-09T20:19:59.168Z",
		"size": 1788,
		"path": "../public/assets/stories._id-VfQQ5ew1.js"
	},
	"/assets/styles-COPIXzI9.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"830b-PZjWzmVtgFzI4dHlfRy4QCqcT9A\"",
		"mtime": "2026-10-09T20:19:59.169Z",
		"size": 33547,
		"path": "../public/assets/styles-COPIXzI9.css"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_w6ATrT = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_w6ATrT
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
