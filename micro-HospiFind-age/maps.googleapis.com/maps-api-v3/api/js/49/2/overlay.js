google.maps.__gjsload__('overlay', function(_) {
    var Nt = function(a) {
            this.h = a
        },
        wla = function() {},
        Ot = function(a) {
            a.zo = a.zo || new wla;
            return a.zo
        },
        xla = function(a) {
            this.Oa = new _.ai(function() {
                var b = a.zo;
                if (a.getPanes()) {
                    if (a.getProjection()) {
                        if (!b.An && a.onAdd) a.onAdd();
                        b.An = !0;
                        a.draw()
                    }
                } else {
                    if (b.An)
                        if (a.onRemove) a.onRemove();
                        else a.remove();
                    b.An = !1
                }
            }, 0)
        },
        yla = function(a, b) {
            function c() {
                return _.bi(e.Oa)
            }
            var d = Ot(a),
                e = d.qm;
            e || (e = d.qm = new xla(a));
            _.pb(d.ab || [], _.F.removeListener);
            var f = d.Ya = d.Ya || new _.Rr,
                g = b.__gm;
            f.bindTo("zoom", g);
            f.bindTo("offset", g);
            f.bindTo("center", g, "projectionCenterQ");
            f.bindTo("projection", b);
            f.bindTo("projectionTopLeft", g);
            f = d.ks = d.ks || new Nt(f);
            f.bindTo("zoom", g);
            f.bindTo("offset", g);
            f.bindTo("projection", b);
            f.bindTo("projectionTopLeft", g);
            a.bindTo("projection", f, "outProjection");
            a.bindTo("panes", g);
            d.ab = [_.F.addListener(a, "panes_changed", c), _.F.addListener(g, "zoom_changed", c), _.F.addListener(g, "offset_changed", c), _.F.addListener(b, "projection_changed", c), _.F.addListener(g, "projectioncenterq_changed", c)];
            c();
            b instanceof
            _.rf && (_.sg(b, "Ox"), _.gg(b, 148440))
        },
        Cla = function(a) {
            if (a) {
                var b = a.getMap();
                if (zla(a) !== b && b && b instanceof _.rf) {
                    var c = b.__gm;
                    c.overlayLayer ? a.__gmop = new Ala(b, a, c.overlayLayer) : c.h.then(function(d) {
                        d = d.Qa;
                        var e = new Pt(b, d);
                        d.ub(e);
                        c.overlayLayer = e;
                        Bla(a);
                        Cla(a)
                    })
                }
            }
        },
        Bla = function(a) {
            if (a) {
                var b = a.__gmop;
                b && (a.__gmop = null, b.h.unbindAll(), b.h.set("panes", null), b.h.set("projection", null), b.l.jg(b), b.j && (b.j = !1, b.h.onRemove ? b.h.onRemove() : b.h.remove()))
            }
        },
        zla = function(a) {
            return (a = a.__gmop) ? a.map : null
        },
        Ala = function(a, b, c) {
            this.map = a;
            this.h = b;
            this.l = c;
            this.j = !1;
            _.sg(this.map, "Ox");
            _.gg(this.map, 148440);
            c.Hf(this)
        },
        Dla = function(a, b) {
            a.h.get("projection") != b && (a.h.bindTo("panes", a.map.__gm), a.h.set("projection", b))
        },
        Pt = function(a, b) {
            this.m = a;
            this.l = b;
            this.h = null;
            this.j = []
        };
    _.C(Nt, _.G);
    Nt.prototype.changed = function(a) {
        "outProjection" != a && (a = !!(this.get("offset") && this.get("projectionTopLeft") && this.get("projection") && _.me(this.get("zoom"))), a == !this.get("outProjection") && this.set("outProjection", a ? this.h : null))
    };
    var Qt = {};
    _.C(xla, _.G);
    Qt.Hf = function(a) {
        if (a) {
            var b = a.getMap();
            (Ot(a).Or || null) !== b && (b && yla(a, b), Ot(a).Or = b)
        }
    };
    Qt.jg = function(a) {
        var b = Ot(a),
            c = b.Ya;
        c && c.unbindAll();
        (c = b.ks) && c.unbindAll();
        a.unbindAll();
        a.set("panes", null);
        a.set("projection", null);
        b.ab && _.pb(b.ab, _.F.removeListener);
        b.ab = null;
        b.qm && (b.qm.Oa.Ld(), b.qm = null);
        delete Ot(a).Or
    };
    var Rt = {};
    Ala.prototype.draw = function() {
        this.j || (this.j = !0, this.h.onAdd && this.h.onAdd());
        this.h.draw && this.h.draw()
    };
    Pt.prototype.dispose = function() {};
    Pt.prototype.Fc = function(a, b, c, d, e, f, g, h) {
        var k = this.h = this.h || new _.Fp(this.m, this.l, function() {});
        k.Fc(a, b, c, d, e, f, g, h);
        a = _.z(this.j);
        for (b = a.next(); !b.done; b = a.next()) b = b.value, Dla(b, k), b.draw()
    };
    Pt.prototype.Hf = function(a) {
        this.j.push(a);
        this.h && Dla(a, this.h);
        this.l.refresh()
    };
    Pt.prototype.jg = function(a) {
        _.wb(this.j, a)
    };
    Rt.Hf = Cla;
    Rt.jg = Bla;
    _.cf("overlay", {
        Kp: function(a) {
            if (a) {
                (0, Qt.jg)(a);
                (0, Rt.jg)(a);
                var b = a.getMap();
                b && (b instanceof _.rf ? (0, Rt.Hf)(a) : (0, Qt.Hf)(a))
            }
        },
        preventMapHitsFrom: function(a) {
            _.iq(a, {
                onClick: function(b) {
                    return _.Op(b.event)
                },
                xd: function(b) {
                    return _.Lp(b)
                },
                Uh: function(b) {
                    return _.Mp(b)
                },
                be: function(b) {
                    return _.Mp(b)
                },
                Gd: function(b) {
                    return _.Np(b)
                }
            }).Pi(!0)
        },
        preventMapHitsAndGesturesFrom: function(a) {
            a.addEventListener("click", _.hf);
            a.addEventListener("contextmenu", _.hf);
            a.addEventListener("dblclick", _.hf);
            a.addEventListener("mousedown",
                _.hf);
            a.addEventListener("mousemove", _.hf);
            a.addEventListener("MSPointerDown", _.hf);
            a.addEventListener("pointerdown", _.hf);
            a.addEventListener("touchstart", _.hf);
            a.addEventListener("wheel", _.hf)
        }
    });
});