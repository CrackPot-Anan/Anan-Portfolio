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
		"mtime": "2026-10-09T19:00:52.634Z",
		"size": 4196,
		"path": "../public/assets/about-V9yXrxEa.js"
	},
	"/assets/admin-QkX_5FhC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7835-AvwMAiiKRdxJBwSo2ziRRLuQnRI\"",
		"mtime": "2026-10-09T19:00:52.634Z",
		"size": 30773,
		"path": "../public/assets/admin-QkX_5FhC.js"
	},
	"/assets/arrow-left-DzGfoyya.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a5-gL+Q/DD23Yv+AwCwHEKwKkyt7dY\"",
		"mtime": "2026-10-09T19:00:52.635Z",
		"size": 165,
		"path": "../public/assets/arrow-left-DzGfoyya.js"
	},
	"/assets/arrow-up-right-5P3aWL8N.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a7-ifEAhKljunYB0c+YjDlu+euHIP8\"",
		"mtime": "2026-10-09T19:00:52.635Z",
		"size": 167,
		"path": "../public/assets/arrow-up-right-5P3aWL8N.js"
	},
	"/assets/auth-CCn13Eb9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"175-Y79b1y8tjl8ZEtZZ3jRJ8cbH7Kc\"",
		"mtime": "2026-10-09T19:00:52.636Z",
		"size": 373,
		"path": "../public/assets/auth-CCn13Eb9.js"
	},
	"/assets/Abrar Anan Raiyan-BXmaAZYN.pdf": {
		"type": "application/pdf",
		"etag": "\"118dc-YRqauL0Hdf/EPTxH3jFUhZZcKe0\"",
		"mtime": "2026-10-09T19:00:52.677Z",
		"size": 71900,
		"path": "../public/assets/Abrar Anan Raiyan-BXmaAZYN.pdf"
	},
	"/assets/blog-Cja7QPl1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"104-BdUF4mcjFoHePwGBDAEZkvlGzIY\"",
		"mtime": "2026-10-09T19:00:52.637Z",
		"size": 260,
		"path": "../public/assets/blog-Cja7QPl1.js"
	},
	"/assets/blog-api-Bt8tYXX9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"16c6-miD7UwCTDAxL/UXhq2ekK6TqXW0\"",
		"mtime": "2026-10-09T19:00:52.637Z",
		"size": 5830,
		"path": "../public/assets/blog-api-Bt8tYXX9.js"
	},
	"/assets/blogs-BxNO_3jv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"124-2E3XyRWhw+lhwQq/+uNWnkvyQ9w\"",
		"mtime": "2026-10-09T19:00:52.638Z",
		"size": 292,
		"path": "../public/assets/blogs-BxNO_3jv.js"
	},
	"/assets/blogs.index-eiIuROY8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"19c5-dID8QL2yZSW8tSMoJbMFHBkWmcA\"",
		"mtime": "2026-10-09T19:00:52.639Z",
		"size": 6597,
		"path": "../public/assets/blogs.index-eiIuROY8.js"
	},
	"/assets/blogs._slug-CwrCgWlG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"928-sbdiBTSYyUscPTta2kA7H5Mk3m0\"",
		"mtime": "2026-10-09T19:00:52.638Z",
		"size": 2344,
		"path": "../public/assets/blogs._slug-CwrCgWlG.js"
	},
	"/assets/blogs._slug-pmlMjgp_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"43c-46lGIfF+DnegI+KVFng+qB0kEU0\"",
		"mtime": "2026-10-09T19:00:52.639Z",
		"size": 1084,
		"path": "../public/assets/blogs._slug-pmlMjgp_.js"
	},
	"/assets/contact-7KAgartO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"96-lmOOmCEuOOVmjSDwwFavUsjtu5M\"",
		"mtime": "2026-10-09T19:00:52.639Z",
		"size": 150,
		"path": "../public/assets/contact-7KAgartO.js"
	},
	"/assets/content-api-CBaX40dx.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"390-AnMfMwca9/yp0f0g9el47Bu2/EA\"",
		"mtime": "2026-10-09T19:00:52.641Z",
		"size": 912,
		"path": "../public/assets/content-api-CBaX40dx.js"
	},
	"/assets/clock-ACw3eS8R.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a9-dWH+HC0m4Anf4U52r82nhRvbqdg\"",
		"mtime": "2026-10-09T19:00:52.639Z",
		"size": 169,
		"path": "../public/assets/clock-ACw3eS8R.js"
	},
	"/assets/createLucideIcon-Bsi8MwWX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4a4-eUEWWmJoxaJdAMBFcO/tnOMlrIs\"",
		"mtime": "2026-10-09T19:00:52.641Z",
		"size": 1188,
		"path": "../public/assets/createLucideIcon-Bsi8MwWX.js"
	},
	"/assets/createServerFn-BpMUg3rS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9551-E3Z2kqhlFvUX6dgZPdZ22I/unnE\"",
		"mtime": "2026-10-09T19:00:52.641Z",
		"size": 38225,
		"path": "../public/assets/createServerFn-BpMUg3rS.js"
	},
	"/assets/credentials-DG81vt4m.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9a-UUfmHrbve+NCp0rCqB8KxOh4Gu8\"",
		"mtime": "2026-10-09T19:00:52.642Z",
		"size": 154,
		"path": "../public/assets/credentials-DG81vt4m.js"
	},
	"/assets/data-BJrck0e-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"24cf-BcsAoWo8F/vdXMEQn4E7kdZEfc0\"",
		"mtime": "2026-10-09T19:00:52.643Z",
		"size": 9423,
		"path": "../public/assets/data-BJrck0e-.js"
	},
	"/assets/education--INdS-LL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"98-qLU6TOWnZoTucjZFZwzDKAihiQY\"",
		"mtime": "2026-10-09T19:00:52.651Z",
		"size": 152,
		"path": "../public/assets/education--INdS-LL.js"
	},
	"/assets/experience-D2QSNH_d.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"99-M8sKmwI+BoD2JSgHeyjgYk6JAXI\"",
		"mtime": "2026-10-09T19:00:52.652Z",
		"size": 153,
		"path": "../public/assets/experience-D2QSNH_d.js"
	},
	"/assets/footer-kOmoXBfi.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"10d6-UfK8bV6e4LyOEBxfgfQkaW5ectQ\"",
		"mtime": "2026-10-09T19:00:52.653Z",
		"size": 4310,
		"path": "../public/assets/footer-kOmoXBfi.js"
	},
	"/assets/home-page-_KVQOBsZ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"59ec-OHuT9OTT3A4PHKCDFX1LrgK0zDQ\"",
		"mtime": "2026-10-09T19:00:52.654Z",
		"size": 23020,
		"path": "../public/assets/home-page-_KVQOBsZ.js"
	},
	"/assets/leadership-d-cFAuDO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"99-gEBHN3PzTuSRAH8hTEZQ10kOauY\"",
		"mtime": "2026-10-09T19:00:52.662Z",
		"size": 153,
		"path": "../public/assets/leadership-d-cFAuDO.js"
	},
	"/assets/index-8zof1ulk.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"462f3-26irCWEMZdHnN/dJ8GX5gIlYHZc\"",
		"mtime": "2026-10-09T19:00:52.634Z",
		"size": 287475,
		"path": "../public/assets/index-8zof1ulk.js"
	},
	"/assets/link-S7LRuTfm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4cdc-eREZUwZN7tZw3FTcKg+AWZvkERs\"",
		"mtime": "2026-10-09T19:00:52.667Z",
		"size": 19676,
		"path": "../public/assets/link-S7LRuTfm.js"
	},
	"/assets/login-DP-19qf1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b1b-cBu7GPaVko3+23t6+N5UJIikyZU\"",
		"mtime": "2026-10-09T19:00:52.668Z",
		"size": 2843,
		"path": "../public/assets/login-DP-19qf1.js"
	},
	"/assets/mail-DG1jw-ZL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d5-koDo7i/uHmvpJBdU9Bgr8BQCQg0\"",
		"mtime": "2026-10-09T19:00:52.668Z",
		"size": 213,
		"path": "../public/assets/mail-DG1jw-ZL.js"
	},
	"/assets/matchContext-D3U4xTeB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9b-DwmzeRbgIoGnSal38kX5rMBV8lg\"",
		"mtime": "2026-10-09T19:00:52.668Z",
		"size": 155,
		"path": "../public/assets/matchContext-D3U4xTeB.js"
	},
	"/assets/not-found-i5RsCZif.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"76-Trmr7GZIBZuvfg4uM18tBiRtOXg\"",
		"mtime": "2026-10-09T19:00:52.669Z",
		"size": 118,
		"path": "../public/assets/not-found-i5RsCZif.js"
	},
	"/assets/products-GYSlnJE0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"97-n2k0TI6NTmkT4C64b/aUBJVv/9U\"",
		"mtime": "2026-10-09T19:00:52.673Z",
		"size": 151,
		"path": "../public/assets/products-GYSlnJE0.js"
	},
	"/assets/projects-DQQF9VWv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"97-wWFNMjd9uWpLEFl/ZbOBfHr20kc\"",
		"mtime": "2026-10-09T19:00:52.673Z",
		"size": 151,
		"path": "../public/assets/projects-DQQF9VWv.js"
	},
	"/assets/routes-Om-b7ZPC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"85-0E1Ik0rdsMcbaSu54Bdig26QNfw\"",
		"mtime": "2026-10-09T19:00:52.675Z",
		"size": 133,
		"path": "../public/assets/routes-Om-b7ZPC.js"
	},
	"/assets/sections-BrXTg45Y.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"42b-2U+7W4H4GQmdLHBwg4EauJAgx4Y\"",
		"mtime": "2026-10-09T19:00:52.676Z",
		"size": 1067,
		"path": "../public/assets/sections-BrXTg45Y.js"
	},
	"/assets/styles-DdpYULk4.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"82c2-zVVDZNGtsVFo0x0UEQ4QBBEpF/U\"",
		"mtime": "2026-10-09T19:00:52.678Z",
		"size": 33474,
		"path": "../public/assets/styles-DdpYULk4.css"
	},
	"/assets/raiyan-about-7jhdrrFZ.jpg": {
		"type": "image/jpeg",
		"etag": "\"164e4-15NT4hVAncxoXkIY4tfxBT53rOE\"",
		"mtime": "2026-10-09T19:00:52.678Z",
		"size": 91364,
		"path": "../public/assets/raiyan-about-7jhdrrFZ.jpg"
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
