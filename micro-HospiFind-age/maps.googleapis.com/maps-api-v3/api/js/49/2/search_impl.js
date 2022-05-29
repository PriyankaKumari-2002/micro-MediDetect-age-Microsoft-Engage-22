google.maps.__gjsload__('search_impl', function(_) {
    var ftb = function(a) {
            _.E(this, a, 4)
        },
        htb = function(a) {
            gtb || (gtb = {
                V: "sssM",
                da: ["ss"]
            });
            var b = gtb;
            return _.Ji.jb(a.Hb(), b)
        },
        itb = function(a, b) {
            a.L[2] = b
        },
        X$ = function(a) {
            _.E(this, a, 3)
        },
        jtb = function() {
            var a = _.Mj,
                b = _.Zi;
            this.j = _.bg;
            this.h = _.Gk(_.vr, a, _.js + "/maps/api/js/LayersService.GetFeature", b)
        },
        mtb = function(a, b, c) {
            var d = _.RB(new jtb);
            c.fr = (0, _.Ma)(d.load, d);
            c.clickable = 0 != a.get("clickable");
            _.kCa(c, _.sI(b));
            var e = [];
            e.push(_.F.addListener(c, "click", (0, _.Ma)(ktb, null, a)));
            _.pb(["mouseover", "mouseout", "mousemove"],
                function(f) {
                    e.push(_.F.addListener(c, f, (0, _.Ma)(ltb, null, a, f)))
                });
            e.push(_.F.addListener(a, "clickable_changed", function() {
                a.h.clickable = 0 != a.get("clickable")
            }));
            a.j = e
        },
        ktb = function(a, b, c, d, e) {
            var f = null;
            if (e && (f = {
                    status: e.getStatus()
                }, 0 == e.getStatus())) {
                f.location = _.Xk(e, 1) ? new _.Ie(_.Kd(e.getLocation(), 0), _.Kd(e.getLocation(), 1)) : null;
                f.fields = {};
                for (var g = 0, h = _.Sd(e, 2); g < h; ++g) {
                    var k = new _.yI(_.$k(e, 2, g));
                    f.fields[k.getKey()] = k.Wa()
                }
            }
            _.F.trigger(a, "click", b, c, d, f)
        },
        ltb = function(a, b, c, d, e, f, g) {
            var h =
                null;
            f && (h = {
                title: f[1].title,
                snippet: f[1].snippet
            });
            _.F.trigger(a, b, c, d, e, h, g)
        },
        ntb = function() {},
        gtb;
    _.C(ftb, _.D);
    ftb.prototype.wb = function() {
        return _.Ld(this, 1)
    };
    _.C(X$, _.D);
    X$.prototype.getStatus = function() {
        return _.Jd(this, 0, -1)
    };
    X$.prototype.getLocation = function() {
        return new _.Rm(this.L[1])
    };
    jtb.prototype.load = function(a, b) {
        function c(g) {
            g = new X$(g);
            b(g)
        }
        var d = new ftb;
        d.L[0] = a.layerId.split("|")[0];
        d.L[1] = a.featureId;
        itb(d, _.Td(_.Wd(this.j)));
        for (var e in a.parameters) {
            var f = new _.yI(_.Rd(d, 3));
            f.L[0] = e;
            f.L[1] = a.parameters[e]
        }
        a = htb(d);
        this.h(a, c, c);
        return a
    };
    jtb.prototype.cancel = function() {
        throw Error("Not implemented");
    };
    ntb.prototype.wu = function(a) {
        if (_.si[15]) {
            var b = a.re,
                c = a.re = a.getMap();
            b && a.h && (a.l ? (b = b.__gm.j, b.set(b.get().kg(a.h))) : a.h && _.GCa(a.h, b) && (_.pb(a.j || [], _.F.removeListener), a.j = null));
            if (c) {
                var d = a.get("layerId"),
                    e = a.get("spotlightDescription"),
                    f = a.get("paintExperimentIds"),
                    g = a.get("styler"),
                    h = a.get("mapsApiLayer"),
                    k = a.get("darkLaunch"),
                    l = a.get("mapFeatures"),
                    m = a.get("travelMapRequest"),
                    p = a.get("searchPipeMetadata"),
                    q = a.get("overlayLayer"),
                    r = a.get("caseExperimentIds");
                b = new _.am;
                d = d.split("|");
                b.layerId =
                    d[0];
                for (var t = 1; t < d.length; ++t) {
                    var v = d[t].split(":");
                    b.parameters[v[0]] = v[1]
                }
                e && (b.spotlightDescription = new _.ho(e));
                f && (b.paintExperimentIds = f.slice(0));
                g && (b.styler = new _.dm(g));
                m && (b.travelMapRequest = new _.qr(m));
                h && (b.mapsApiLayer = new _.dl(h));
                l && (b.mapFeatures = l);
                p && (b.searchPipeMetadata = new _.vn(p));
                q && (b.overlayLayer = new _.xn(q));
                r && (b.caseExperimentIds = r.slice(0));
                b.darkLaunch = !!k;
                a.h = b;
                a.l = a.get("renderOnBaseMap");
                a.l ? (a = c.__gm.j, a.set(a.get().ze(b))) : mtb(a, c, b);
                _.sg(c, "Lg");
                _.gg(c, 148282)
            }
        }
    };
    _.cf("search_impl", new ntb);
});