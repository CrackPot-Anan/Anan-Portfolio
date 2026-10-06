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
	"/assets/admin-4I2ZsdjW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3d6d-loChXv4Yswx5XgvDDP6xzcV89Zk\"",
		"mtime": "2026-10-06T19:33:03.678Z",
		"size": 15725,
		"path": "../public/assets/admin-4I2ZsdjW.js"
	},
	"/assets/arrow-left-DzGfoyya.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a5-gL+Q/DD23Yv+AwCwHEKwKkyt7dY\"",
		"mtime": "2026-10-06T19:33:03.678Z",
		"size": 165,
		"path": "../public/assets/arrow-left-DzGfoyya.js"
	},
	"/assets/arrow-up-right-5P3aWL8N.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a7-ifEAhKljunYB0c+YjDlu+euHIP8\"",
		"mtime": "2026-10-06T19:33:03.678Z",
		"size": 167,
		"path": "../public/assets/arrow-up-right-5P3aWL8N.js"
	},
	"/assets/auth-FUnrDmdF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"175-MKg1aAxtXVBk3N7He+GGHB0ktrA\"",
		"mtime": "2026-10-06T19:33:03.683Z",
		"size": 373,
		"path": "../public/assets/auth-FUnrDmdF.js"
	},
	"/assets/blog-api-DJmsHJOK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"14a6-2T95I5s5FtQhe03tFDS5flbQ2iI\"",
		"mtime": "2026-10-06T19:33:03.684Z",
		"size": 5286,
		"path": "../public/assets/blog-api-DJmsHJOK.js"
	},
	"/assets/blog-Cja7QPl1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"104-BdUF4mcjFoHePwGBDAEZkvlGzIY\"",
		"mtime": "2026-10-06T19:33:03.684Z",
		"size": 260,
		"path": "../public/assets/blog-Cja7QPl1.js"
	},
	"/assets/blogs-C9Ofcs31.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"129-z5HrohO1olcBT9qDqgH8G8tgePs\"",
		"mtime": "2026-10-06T19:33:03.684Z",
		"size": 297,
		"path": "../public/assets/blogs-C9Ofcs31.js"
	},
	"/assets/Abrar Anan Raiyan-BXmaAZYN.pdf": {
		"type": "application/pdf",
		"etag": "\"118dc-YRqauL0Hdf/EPTxH3jFUhZZcKe0\"",
		"mtime": "2026-10-06T19:33:03.743Z",
		"size": 71900,
		"path": "../public/assets/Abrar Anan Raiyan-BXmaAZYN.pdf"
	},
	"/assets/blogs.index-B9iMN8gC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1274-JMYtMDJopCqzRFG28nNAe2qBEC8\"",
		"mtime": "2026-10-06T19:33:03.686Z",
		"size": 4724,
		"path": "../public/assets/blogs.index-B9iMN8gC.js"
	},
	"/assets/blogs._slug-OVYeJr_B.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"85b-edV+luM0vAIAEGTCdeyB3H4Yxrk\"",
		"mtime": "2026-10-06T19:33:03.684Z",
		"size": 2139,
		"path": "../public/assets/blogs._slug-OVYeJr_B.js"
	},
	"/assets/blogs._slug-pmlMjgp_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"43c-46lGIfF+DnegI+KVFng+qB0kEU0\"",
		"mtime": "2026-10-06T19:33:03.686Z",
		"size": 1084,
		"path": "../public/assets/blogs._slug-pmlMjgp_.js"
	},
	"/assets/clock-ACw3eS8R.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a9-dWH+HC0m4Anf4U52r82nhRvbqdg\"",
		"mtime": "2026-10-06T19:33:03.692Z",
		"size": 169,
		"path": "../public/assets/clock-ACw3eS8R.js"
	},
	"/assets/createLucideIcon-Bsi8MwWX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4a4-eUEWWmJoxaJdAMBFcO/tnOMlrIs\"",
		"mtime": "2026-10-06T19:33:03.692Z",
		"size": 1188,
		"path": "../public/assets/createLucideIcon-Bsi8MwWX.js"
	},
	"/assets/createServerFn-Z_oaZM4F.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"96e3-o8Rl4jC/ZFGSvU7oc1VmwVbfhuk\"",
		"mtime": "2026-10-06T19:33:03.707Z",
		"size": 38627,
		"path": "../public/assets/createServerFn-Z_oaZM4F.js"
	},
	"/assets/footer--okF6QEz.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"14de-J3eUbyatTZdG3m5vXfAzuzsyFiA\"",
		"mtime": "2026-10-06T19:33:03.738Z",
		"size": 5342,
		"path": "../public/assets/footer--okF6QEz.js"
	},
	"/assets/link-S7LRuTfm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4cdc-eREZUwZN7tZw3FTcKg+AWZvkERs\"",
		"mtime": "2026-10-06T19:33:03.740Z",
		"size": 19676,
		"path": "../public/assets/link-S7LRuTfm.js"
	},
	"/assets/login-jmmK8oIy.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b18-frnPsqXkB55yRb4wv/j/v9I0ZwY\"",
		"mtime": "2026-10-06T19:33:03.740Z",
		"size": 2840,
		"path": "../public/assets/login-jmmK8oIy.js"
	},
	"/assets/index-DwtPPzPX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4525c-uGmaFYHgJIxTEjz6LvQszVOE41A\"",
		"mtime": "2026-10-06T19:33:03.678Z",
		"size": 283228,
		"path": "../public/assets/index-DwtPPzPX.js"
	},
	"/assets/mail-DG1jw-ZL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d5-koDo7i/uHmvpJBdU9Bgr8BQCQg0\"",
		"mtime": "2026-10-06T19:33:03.742Z",
		"size": 213,
		"path": "../public/assets/mail-DG1jw-ZL.js"
	},
	"/assets/root-DLTE-HSj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"20-vSYConOtSP6ciwr9zKsPixNwWmc\"",
		"mtime": "2026-10-06T19:33:03.742Z",
		"size": 32,
		"path": "../public/assets/root-DLTE-HSj.js"
	},
	"/assets/routes-vlu__sgu.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"327e-qcnD/QqeUypafaIwn5G0RA2vRZ4\"",
		"mtime": "2026-10-06T19:33:03.743Z",
		"size": 12926,
		"path": "../public/assets/routes-vlu__sgu.js"
	},
	"/assets/sections-BOwVU1o1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"376-P4ovWIlmP+GkZF9Bwo6N13kfP9E\"",
		"mtime": "2026-10-06T19:33:03.743Z",
		"size": 886,
		"path": "../public/assets/sections-BOwVU1o1.js"
	},
	"/assets/styles-CAAKt2Bl.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"681b-kz4sxkgBi9s0Mkk8LKTKuBD1O4g\"",
		"mtime": "2026-10-06T19:33:03.757Z",
		"size": 26651,
		"path": "../public/assets/styles-CAAKt2Bl.css"
	},
	"/assets/useNavigate-C4JRKnuN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b8-IgtodsTcTV81XOtmxuQ6PfiogSk\"",
		"mtime": "2026-10-06T19:33:03.743Z",
		"size": 184,
		"path": "../public/assets/useNavigate-C4JRKnuN.js"
	},
	"/assets/raiyan-CKpxej7e.jpg": {
		"type": "image/jpeg",
		"etag": "\"1dd802-wsohTIQcCBkp0qhjFc3+JdyOM5g\"",
		"mtime": "2026-10-06T19:33:03.757Z",
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
