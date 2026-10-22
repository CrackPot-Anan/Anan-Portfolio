globalThis.__nitro_main__ = import.meta.url;
import { n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx+unenv.mjs";
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
	"/assets/about-DlCQMytk.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1064-KsdEXmcKbSWeCGTNIeMP82/uAwI\"",
		"mtime": "2026-10-22T18:50:52.274Z",
		"size": 4196,
		"path": "../public/assets/about-DlCQMytk.js"
	},
	"/assets/admin-BBFNQNFv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ae91-/5QjpFvPVx5yMPexTdgk2WI3p/o\"",
		"mtime": "2026-10-22T18:50:52.285Z",
		"size": 44689,
		"path": "../public/assets/admin-BBFNQNFv.js"
	},
	"/assets/arrow-left-DzGfoyya.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a5-gL+Q/DD23Yv+AwCwHEKwKkyt7dY\"",
		"mtime": "2026-10-22T18:50:52.286Z",
		"size": 165,
		"path": "../public/assets/arrow-left-DzGfoyya.js"
	},
	"/assets/arrow-up-right-5P3aWL8N.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a7-ifEAhKljunYB0c+YjDlu+euHIP8\"",
		"mtime": "2026-10-22T18:50:52.290Z",
		"size": 167,
		"path": "../public/assets/arrow-up-right-5P3aWL8N.js"
	},
	"/assets/auth-CCn13Eb9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"175-Y79b1y8tjl8ZEtZZ3jRJ8cbH7Kc\"",
		"mtime": "2026-10-22T18:50:52.291Z",
		"size": 373,
		"path": "../public/assets/auth-CCn13Eb9.js"
	},
	"/assets/Abrar Anan Raiyan-BXmaAZYN.pdf": {
		"type": "application/pdf",
		"etag": "\"118dc-YRqauL0Hdf/EPTxH3jFUhZZcKe0\"",
		"mtime": "2026-10-22T18:50:52.607Z",
		"size": 71900,
		"path": "../public/assets/Abrar Anan Raiyan-BXmaAZYN.pdf"
	},
	"/assets/blog-api-Dy8Spn2r.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3f9-VtONfqeLb0VOmjxbZ1iy+UcGN88\"",
		"mtime": "2026-10-22T18:50:52.291Z",
		"size": 1017,
		"path": "../public/assets/blog-api-Dy8Spn2r.js"
	},
	"/assets/blog-W8IbWJpJ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"11b-2ZhISNJGk+PKvfuO6cH7q+1yt6I\"",
		"mtime": "2026-10-22T18:50:52.291Z",
		"size": 283,
		"path": "../public/assets/blog-W8IbWJpJ.js"
	},
	"/assets/blog-skeleton-8KnjSEl-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6a1-QkPIv1NWqGgImMCN96O6lQ7bqCA\"",
		"mtime": "2026-10-22T18:50:52.292Z",
		"size": 1697,
		"path": "../public/assets/blog-skeleton-8KnjSEl-.js"
	},
	"/assets/blogs-B0W8kU6C.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"124-umKU4iDdOJWcgqHc2rTwKXEv9z8\"",
		"mtime": "2026-10-22T18:50:52.293Z",
		"size": 292,
		"path": "../public/assets/blogs-B0W8kU6C.js"
	},
	"/assets/blogs.index-DoOD4v77.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"181d-87G3RM31r8wdIvocrkUll1UTi4s\"",
		"mtime": "2026-10-22T18:50:52.407Z",
		"size": 6173,
		"path": "../public/assets/blogs.index-DoOD4v77.js"
	},
	"/assets/blogs._slug-DdHp2cK-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1471-zG1BqvQ/bL9arXSnXHdCpj4eO9A\"",
		"mtime": "2026-10-22T18:50:52.304Z",
		"size": 5233,
		"path": "../public/assets/blogs._slug-DdHp2cK-.js"
	},
	"/assets/clock-ACw3eS8R.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a9-dWH+HC0m4Anf4U52r82nhRvbqdg\"",
		"mtime": "2026-10-22T18:50:52.408Z",
		"size": 169,
		"path": "../public/assets/clock-ACw3eS8R.js"
	},
	"/assets/contact-DT8ihYNW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"96-hEcLB6Gsc7zXSlGLo+WlKNPI5bY\"",
		"mtime": "2026-10-22T18:50:52.408Z",
		"size": 150,
		"path": "../public/assets/contact-DT8ihYNW.js"
	},
	"/assets/blogs._slug-pmlMjgp_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"43c-46lGIfF+DnegI+KVFng+qB0kEU0\"",
		"mtime": "2026-10-22T18:50:52.406Z",
		"size": 1084,
		"path": "../public/assets/blogs._slug-pmlMjgp_.js"
	},
	"/assets/content-api-DMW3ISD5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"674-WE6aRFKCi46N3QAV4WfZvnKXDeU\"",
		"mtime": "2026-10-22T18:50:52.408Z",
		"size": 1652,
		"path": "../public/assets/content-api-DMW3ISD5.js"
	},
	"/assets/createLucideIcon-Bsi8MwWX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4a4-eUEWWmJoxaJdAMBFcO/tnOMlrIs\"",
		"mtime": "2026-10-22T18:50:52.409Z",
		"size": 1188,
		"path": "../public/assets/createLucideIcon-Bsi8MwWX.js"
	},
	"/assets/credentials-Cel-4W1E.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9a-bDSbn6zI8W8f7w/jBdpIG9VHV/w\"",
		"mtime": "2026-10-22T18:50:52.541Z",
		"size": 154,
		"path": "../public/assets/credentials-Cel-4W1E.js"
	},
	"/assets/education-dQmDSOdJ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"98-QQa4tb9/IHWq8PtH1MMe4Ka8HpM\"",
		"mtime": "2026-10-22T18:50:52.542Z",
		"size": 152,
		"path": "../public/assets/education-dQmDSOdJ.js"
	},
	"/assets/createServerFn-BpMUg3rS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9551-E3Z2kqhlFvUX6dgZPdZ22I/unnE\"",
		"mtime": "2026-10-22T18:50:52.409Z",
		"size": 38225,
		"path": "../public/assets/createServerFn-BpMUg3rS.js"
	},
	"/assets/experience-DtMYpI_V.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"99-y1gxM/npY6oJfQgyQAzMdpO8a0c\"",
		"mtime": "2026-10-22T18:50:52.542Z",
		"size": 153,
		"path": "../public/assets/experience-DtMYpI_V.js"
	},
	"/assets/hobbies._id-BeLNy-wX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6f4-4rLA5xyihnpiRdci5iLx0/9A3ZI\"",
		"mtime": "2026-10-22T18:50:52.543Z",
		"size": 1780,
		"path": "../public/assets/hobbies._id-BeLNy-wX.js"
	},
	"/assets/data-Dz5FGj9F.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"29be-PenVhfdg7+FNRXleLImDtgI7ijI\"",
		"mtime": "2026-10-22T18:50:52.542Z",
		"size": 10686,
		"path": "../public/assets/data-Dz5FGj9F.js"
	},
	"/assets/footer-BWhrtbWt.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d46-pXXCkJHTZtORxcW48t0QMqVvoak\"",
		"mtime": "2026-10-22T18:50:52.543Z",
		"size": 3398,
		"path": "../public/assets/footer-BWhrtbWt.js"
	},
	"/assets/hobbies._id-BVfbpDSH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4d0-mfT9OX/hhiQ7k9S9DrNh1Zv10fM\"",
		"mtime": "2026-10-22T18:50:52.543Z",
		"size": 1232,
		"path": "../public/assets/hobbies._id-BVfbpDSH.js"
	},
	"/assets/leadership-CcXtGWUX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"99-8OUdCn9Fx2zjxnY+lYSexCqJ6aU\"",
		"mtime": "2026-10-22T18:50:52.544Z",
		"size": 153,
		"path": "../public/assets/leadership-CcXtGWUX.js"
	},
	"/assets/link-S7LRuTfm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4cdc-eREZUwZN7tZw3FTcKg+AWZvkERs\"",
		"mtime": "2026-10-22T18:50:52.544Z",
		"size": 19676,
		"path": "../public/assets/link-S7LRuTfm.js"
	},
	"/assets/mail-DG1jw-ZL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d5-koDo7i/uHmvpJBdU9Bgr8BQCQg0\"",
		"mtime": "2026-10-22T18:50:52.550Z",
		"size": 213,
		"path": "../public/assets/mail-DG1jw-ZL.js"
	},
	"/assets/index-DH3crwMl.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"47806-IAoxXOfiM3Mm0ZY8mYTZoSwJOCg\"",
		"mtime": "2026-10-22T18:50:52.264Z",
		"size": 292870,
		"path": "../public/assets/index-DH3crwMl.js"
	},
	"/assets/linkedin-1BVjX35J.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"371-sZuL2b7Y0ZIgtoakapPTjFt0WBs\"",
		"mtime": "2026-10-22T18:50:52.545Z",
		"size": 881,
		"path": "../public/assets/linkedin-1BVjX35J.js"
	},
	"/assets/login-0lM2Pe7E.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b1b-orn+uQ7xV0yi7X7oZq9DZdg/558\"",
		"mtime": "2026-10-22T18:50:52.545Z",
		"size": 2843,
		"path": "../public/assets/login-0lM2Pe7E.js"
	},
	"/assets/home-page-DmUXDnsX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"72d3-kfNTAyvYnBBbB6xvJHMcBXMx3ck\"",
		"mtime": "2026-10-22T18:50:52.543Z",
		"size": 29395,
		"path": "../public/assets/home-page-DmUXDnsX.js"
	},
	"/assets/matchContext-D3U4xTeB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9b-DwmzeRbgIoGnSal38kX5rMBV8lg\"",
		"mtime": "2026-10-22T18:50:52.550Z",
		"size": 155,
		"path": "../public/assets/matchContext-D3U4xTeB.js"
	},
	"/assets/not-found-i5RsCZif.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"76-Trmr7GZIBZuvfg4uM18tBiRtOXg\"",
		"mtime": "2026-10-22T18:50:52.551Z",
		"size": 118,
		"path": "../public/assets/not-found-i5RsCZif.js"
	},
	"/assets/products-CPLta1A9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"97-VeqsvenRSdUE3Nh+c1pkTGL7B/Y\"",
		"mtime": "2026-10-22T18:50:52.551Z",
		"size": 151,
		"path": "../public/assets/products-CPLta1A9.js"
	},
	"/assets/preload-helper-Bz2bP3gn.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1438-5qRr7tQb5PnNxgoSNkio9GOvpUk\"",
		"mtime": "2026-10-22T18:50:52.551Z",
		"size": 5176,
		"path": "../public/assets/preload-helper-Bz2bP3gn.js"
	},
	"/assets/og-default-pbf2f7-o.jpg": {
		"type": "image/jpeg",
		"etag": "\"14284-Ddgel7POaWWyRyBnFket0+nATmE\"",
		"mtime": "2026-10-22T18:50:52.607Z",
		"size": 82564,
		"path": "../public/assets/og-default-pbf2f7-o.jpg"
	},
	"/assets/routes-BXp8gF4l.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"85-RRbTRPySAiDMCwyRV4pikZYbNCQ\"",
		"mtime": "2026-10-22T18:50:52.603Z",
		"size": 133,
		"path": "../public/assets/routes-BXp8gF4l.js"
	},
	"/assets/projects-CaThc6gd.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"97-9VauCg3LTUL1NOmD3djnSpb+1E4\"",
		"mtime": "2026-10-22T18:50:52.551Z",
		"size": 151,
		"path": "../public/assets/projects-CaThc6gd.js"
	},
	"/assets/send-DZB5f5ks.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"122-oVx/tgxRxSsa+jzDm5Zb9omKcE8\"",
		"mtime": "2026-10-22T18:50:52.606Z",
		"size": 290,
		"path": "../public/assets/send-DZB5f5ks.js"
	},
	"/assets/sections-CwHVBBuV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"42b-reGpfboPZp/F8Srm9B81UFRIGSo\"",
		"mtime": "2026-10-22T18:50:52.606Z",
		"size": 1067,
		"path": "../public/assets/sections-CwHVBBuV.js"
	},
	"/assets/raiyan-about-7jhdrrFZ.jpg": {
		"type": "image/jpeg",
		"etag": "\"164e4-15NT4hVAncxoXkIY4tfxBT53rOE\"",
		"mtime": "2026-10-22T18:50:52.674Z",
		"size": 91364,
		"path": "../public/assets/raiyan-about-7jhdrrFZ.jpg"
	},
	"/assets/seo-DUJehXLt.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1209-ZClSOJhLfzOHJO77HEaTcAD2DZ0\"",
		"mtime": "2026-10-22T18:50:52.606Z",
		"size": 4617,
		"path": "../public/assets/seo-DUJehXLt.js"
	},
	"/assets/stories._id-B6PuHTEF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6fc-lrIHRkZ3+Ejg6WIZiI+mRp6WLgo\"",
		"mtime": "2026-10-22T18:50:52.607Z",
		"size": 1788,
		"path": "../public/assets/stories._id-B6PuHTEF.js"
	},
	"/assets/stories._id-DDE6HTns.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4d0-V96CV/sQ/u7RR+jjsl4lVFpgsLk\"",
		"mtime": "2026-10-22T18:50:52.607Z",
		"size": 1232,
		"path": "../public/assets/stories._id-DDE6HTns.js"
	},
	"/assets/styles-CNm6f9w5.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"8bbd-REZrfyuCTcN1v+DLMN8CsdJP6EE\"",
		"mtime": "2026-10-22T18:50:52.674Z",
		"size": 35773,
		"path": "../public/assets/styles-CNm6f9w5.css"
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
