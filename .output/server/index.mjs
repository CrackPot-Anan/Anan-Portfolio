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
	"/assets/about-CD3poTBV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"94-pcEYSg7rfnr/NLgKNQ2Fih9peJI\"",
		"mtime": "2026-10-08T11:28:13.721Z",
		"size": 148,
		"path": "../public/assets/about-CD3poTBV.js"
	},
	"/assets/admin-BsEsWT71.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4b9a-+EcOTajQ6LYdZtmVs9vfR43dxgI\"",
		"mtime": "2026-10-08T11:28:13.722Z",
		"size": 19354,
		"path": "../public/assets/admin-BsEsWT71.js"
	},
	"/assets/arrow-left-DzGfoyya.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a5-gL+Q/DD23Yv+AwCwHEKwKkyt7dY\"",
		"mtime": "2026-10-08T11:28:13.722Z",
		"size": 165,
		"path": "../public/assets/arrow-left-DzGfoyya.js"
	},
	"/assets/arrow-up-right-5P3aWL8N.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a7-ifEAhKljunYB0c+YjDlu+euHIP8\"",
		"mtime": "2026-10-08T11:28:13.722Z",
		"size": 167,
		"path": "../public/assets/arrow-up-right-5P3aWL8N.js"
	},
	"/assets/auth-CCn13Eb9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"175-Y79b1y8tjl8ZEtZZ3jRJ8cbH7Kc\"",
		"mtime": "2026-10-08T11:28:13.723Z",
		"size": 373,
		"path": "../public/assets/auth-CCn13Eb9.js"
	},
	"/assets/blog-api-BbI7Vhf6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"165b-pHEm8mygptFD9CCokVAIlCqWoQM\"",
		"mtime": "2026-10-08T11:28:13.723Z",
		"size": 5723,
		"path": "../public/assets/blog-api-BbI7Vhf6.js"
	},
	"/assets/blog-Cja7QPl1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"104-BdUF4mcjFoHePwGBDAEZkvlGzIY\"",
		"mtime": "2026-10-08T11:28:13.723Z",
		"size": 260,
		"path": "../public/assets/blog-Cja7QPl1.js"
	},
	"/assets/blogs-CEWdb8EZ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"124-E7OUdVYl9iRHy9qMpE/XYd7xr7U\"",
		"mtime": "2026-10-08T11:28:13.723Z",
		"size": 292,
		"path": "../public/assets/blogs-CEWdb8EZ.js"
	},
	"/assets/blogs.index-_aq5Lw5z.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1488-kT6cRCMHXl9J+Dq3g3bwIw1iFW0\"",
		"mtime": "2026-10-08T11:28:13.725Z",
		"size": 5256,
		"path": "../public/assets/blogs.index-_aq5Lw5z.js"
	},
	"/assets/blogs._slug-BmKU7a22.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"921-rob1iYA8mqcZjgCQLOnHuf3X6nA\"",
		"mtime": "2026-10-08T11:28:13.724Z",
		"size": 2337,
		"path": "../public/assets/blogs._slug-BmKU7a22.js"
	},
	"/assets/blogs._slug-pmlMjgp_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"43c-46lGIfF+DnegI+KVFng+qB0kEU0\"",
		"mtime": "2026-10-08T11:28:13.724Z",
		"size": 1084,
		"path": "../public/assets/blogs._slug-pmlMjgp_.js"
	},
	"/assets/clock-ACw3eS8R.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a9-dWH+HC0m4Anf4U52r82nhRvbqdg\"",
		"mtime": "2026-10-08T11:28:13.725Z",
		"size": 169,
		"path": "../public/assets/clock-ACw3eS8R.js"
	},
	"/assets/contact-D0DeWlAd.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"96-v4NMOrhZnm7sE9d2IyeG/E7sD8g\"",
		"mtime": "2026-10-08T11:28:13.726Z",
		"size": 150,
		"path": "../public/assets/contact-D0DeWlAd.js"
	},
	"/assets/createLucideIcon-Bsi8MwWX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4a4-eUEWWmJoxaJdAMBFcO/tnOMlrIs\"",
		"mtime": "2026-10-08T11:28:13.729Z",
		"size": 1188,
		"path": "../public/assets/createLucideIcon-Bsi8MwWX.js"
	},
	"/assets/createServerFn-BpMUg3rS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9551-E3Z2kqhlFvUX6dgZPdZ22I/unnE\"",
		"mtime": "2026-10-08T11:28:13.729Z",
		"size": 38225,
		"path": "../public/assets/createServerFn-BpMUg3rS.js"
	},
	"/assets/Abrar Anan Raiyan-BXmaAZYN.pdf": {
		"type": "application/pdf",
		"etag": "\"118dc-YRqauL0Hdf/EPTxH3jFUhZZcKe0\"",
		"mtime": "2026-10-08T11:28:13.763Z",
		"size": 71900,
		"path": "../public/assets/Abrar Anan Raiyan-BXmaAZYN.pdf"
	},
	"/assets/education-BFfF-qmS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"98-BezvGfuC5AP+7xwZ8YhO+ZH8N9I\"",
		"mtime": "2026-10-08T11:28:13.730Z",
		"size": 152,
		"path": "../public/assets/education-BFfF-qmS.js"
	},
	"/assets/experience-DM4fYQUf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"99-fUXA0yaCA6VrURS5AP4h225eICw\"",
		"mtime": "2026-10-08T11:28:13.730Z",
		"size": 153,
		"path": "../public/assets/experience-DM4fYQUf.js"
	},
	"/assets/footer-Bctq10dC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1187-RCdxVHYlQDH0WLsY+J2I8jdX8G8\"",
		"mtime": "2026-10-08T11:28:13.730Z",
		"size": 4487,
		"path": "../public/assets/footer-Bctq10dC.js"
	},
	"/assets/home-page-BhvLMflx.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"33fc-stwgX4MTKbuFloVQHkeVbmOa62w\"",
		"mtime": "2026-10-08T11:28:13.730Z",
		"size": 13308,
		"path": "../public/assets/home-page-BhvLMflx.js"
	},
	"/assets/leadership-BoCrpNoW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"99-lFozm8MiIv8JvGcXp7BKutVBC6Y\"",
		"mtime": "2026-10-08T11:28:13.730Z",
		"size": 153,
		"path": "../public/assets/leadership-BoCrpNoW.js"
	},
	"/assets/index-BqvDWQxN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"45ff6-ERdMJSFDyNn1WQ/iPC0aj6/oQTE\"",
		"mtime": "2026-10-08T11:28:13.721Z",
		"size": 286710,
		"path": "../public/assets/index-BqvDWQxN.js"
	},
	"/assets/link-S7LRuTfm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4cdc-eREZUwZN7tZw3FTcKg+AWZvkERs\"",
		"mtime": "2026-10-08T11:28:13.731Z",
		"size": 19676,
		"path": "../public/assets/link-S7LRuTfm.js"
	},
	"/assets/login-DWmI13D1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b1b-/NfCcWie3EvTME/SQRnsOqfWSY0\"",
		"mtime": "2026-10-08T11:28:13.748Z",
		"size": 2843,
		"path": "../public/assets/login-DWmI13D1.js"
	},
	"/assets/mail-DG1jw-ZL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d5-koDo7i/uHmvpJBdU9Bgr8BQCQg0\"",
		"mtime": "2026-10-08T11:28:13.748Z",
		"size": 213,
		"path": "../public/assets/mail-DG1jw-ZL.js"
	},
	"/assets/matchContext-D3U4xTeB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9b-DwmzeRbgIoGnSal38kX5rMBV8lg\"",
		"mtime": "2026-10-08T11:28:13.748Z",
		"size": 155,
		"path": "../public/assets/matchContext-D3U4xTeB.js"
	},
	"/assets/not-found-i5RsCZif.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"76-Trmr7GZIBZuvfg4uM18tBiRtOXg\"",
		"mtime": "2026-10-08T11:28:13.749Z",
		"size": 118,
		"path": "../public/assets/not-found-i5RsCZif.js"
	},
	"/assets/products-CRpr8OWt.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"97-xkddy2E+gYowCZHoZZWhcuUY6i4\"",
		"mtime": "2026-10-08T11:28:13.754Z",
		"size": 151,
		"path": "../public/assets/products-CRpr8OWt.js"
	},
	"/assets/routes-7f7VmqyU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"85-Mq98kRCjsHdUJqS7nWMgwvJr/4E\"",
		"mtime": "2026-10-08T11:28:13.762Z",
		"size": 133,
		"path": "../public/assets/routes-7f7VmqyU.js"
	},
	"/assets/sections-BOwVU1o1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"376-P4ovWIlmP+GkZF9Bwo6N13kfP9E\"",
		"mtime": "2026-10-08T11:28:13.763Z",
		"size": 886,
		"path": "../public/assets/sections-BOwVU1o1.js"
	},
	"/assets/styles-D0YFb52o.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"6a2b-Qx78+Fm846ilYfBrlX4f1fDhqTY\"",
		"mtime": "2026-10-08T11:28:13.768Z",
		"size": 27179,
		"path": "../public/assets/styles-D0YFb52o.css"
	},
	"/assets/projects-DyhVs7Yd.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"97-hT7uhhCS5Z55nx7sem4PDoroB6U\"",
		"mtime": "2026-10-08T11:28:13.762Z",
		"size": 151,
		"path": "../public/assets/projects-DyhVs7Yd.js"
	},
	"/assets/raiyan-CKpxej7e.jpg": {
		"type": "image/jpeg",
		"etag": "\"1dd802-wsohTIQcCBkp0qhjFc3+JdyOM5g\"",
		"mtime": "2026-10-08T11:28:13.765Z",
		"size": 1955842,
		"path": "../public/assets/raiyan-CKpxej7e.jpg"
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
