(this["webpackJsonpretirement-guide"] = this["webpackJsonpretirement-guide"] || []).push([
    [0], {
        15: function (e, t, n) {},
        18: function (e, t, n) {
            "use strict";
            n.r(t);
            var r = n(1),
                a = n.n(r),
                s = n(8),
                c = n.n(s),
                i = (n(15), n(2)),
                l = n.p + "static/media/WWW-logo.1e558311.png",
                o = n(0),
                u = function () {
                    return Object(o.jsxs)("div", {
                        className: "header",
                        children: [Object(o.jsx)("img", {
                            id: "www-logo",
                            src: l,
                            alt: "Wealth Without Wall Street"
                        }), Object(o.jsx)("h1", {
                            className: "page-title",
                            children: "Retirement Calculator"
                        })]
                    })
                },
                d = n(3),
                m = n(9),
                j = n.n(m);
            var h = function () {
                var e = Object(r.useState)(),
                    t = Object(i.a)(e, 2),
                    n = t[0],
                    a = t[1],
                    s = Object(r.useState)(),
                    c = Object(i.a)(s, 2),
                    l = c[0],
                    m = c[1],
                    h = Object(r.useState)(),
                    b = Object(i.a)(h, 2),
                    p = b[0],
                    f = b[1],
                    O = Object(r.useState)(),
                    g = Object(i.a)(O, 2),
                    x = g[0],
                    v = g[1],
                    A = Object(r.useState)(6),
                    N = Object(i.a)(A, 1)[0],
                    S = Object(r.useState)(),
                    w = Object(i.a)(S, 2),
                    C = w[0],
                    F = w[1],
                    I = Object(r.useState)(),
                    R = Object(i.a)(I, 2),
                    y = R[0],
                    P = R[1];

                function T(e, t, n, r, a) {
                    var s = t * Math.pow(1 + n / (100 * a), -r);
                    return s += 0 === n ? e * r : e * ((1 - Math.pow(1 + n / (100 * a), -r)) / (n / (100 * a)))
                }
                return Object(o.jsxs)("div", {
                    className: "App",
                    id: "app",
                    children: [Object(o.jsx)(u, {}), Object(o.jsxs)("div", {
                        className: "main",
                        children: [Object(o.jsxs)("div", {
                            className: "form",
                            children: [Object(o.jsxs)("div", {
                                className: "group1",
                                children: [Object(o.jsxs)("div", {
                                    className: "field mr-16",
                                    children: [Object(o.jsx)("label", {
                                        htmlFor: "currentAge",
                                        children: "Current Age"
                                    }), Object(o.jsx)("input", {
                                        name: "currentAge",
                                        type: "number",
                                        placeholder: "Enter Your Current Age",
                                        value: n,
                                        onChange: function (e) {
                                            a(e.target.value)
                                        }
                                    })]
                                }), Object(o.jsxs)("div", {
                                    className: "field",
                                    children: [Object(o.jsxs)("label", {
                                        htmlFor: "freedomAge",
                                        children: ["Age you would like to be ", Object(o.jsx)("br", {}), "Financially Free"]
                                    }), Object(o.jsx)("input", {
                                        name: "freedomAge",
                                        placeholder: "Enter Freedom Age",
                                        type: "number",
                                        onChange: function (e) {}
                                    })]
                                })]
                            }), Object(o.jsxs)("div", {
                                className: "group2",
                                children: [Object(o.jsxs)("div", {
                                    className: "field mr-16",
                                    children: [Object(o.jsx)("label", {
                                        htmlFor: "currentIncome",
                                        children: "Current Income"
                                    }), Object(o.jsx)(d.a, {
                                        name: "currentIncome",
                                        placeholder: "Enter Annual Income",
                                        value: l,
                                        isNumericString: !0,
                                        thousandSeparator: !0,
                                        prefix: "$",
                                        onValueChange: function (e) {
                                            m(parseInt(e.value)), F(33.33 * parseInt(e.value) * -1)
                                        }
                                    })]
                                }), Object(o.jsxs)("div", {
                                    className: "field mr-16",
                                    children: [Object(o.jsx)("label", {
                                        htmlFor: "annualSavingsAmount",
                                        children: "Annual Savings Amount"
                                    }), Object(o.jsx)(d.a, {
                                        name: "annualSavingsAmount",
                                        placeholder: "Enter Annual Savings",
                                        value: p,
                                        isNumericString: !0,
                                        thousandSeparator: !0,
                                        prefix: "$",
                                        onValueChange: function (e) {
                                            f(parseInt(e.value))
                                        }
                                    })]
                                }), Object(o.jsxs)("div", {
                                    className: "field",
                                    children: [Object(o.jsx)("label", {
                                        htmlFor: "currentRetirementAssets",
                                        children: "Current Retirement Assets"
                                    }), Object(o.jsx)(d.a, {
                                        name: "currentRetiremenAssets",
                                        placeholder: "Enter Current Assets",
                                        value: x,
                                        isNumericString: !0,
                                        thousandSeparator: !0,
                                        prefix: "$",
                                        onValueChange: function (e) {
                                            v(parseInt(e.value))
                                        }
                                    })]
                                })]
                            }), Object(o.jsx)("h3", {
                                className: "title",
                                children: "Wall Street's Plan For You"
                            }), Object(o.jsxs)("div", {
                                className: "group3",
                                children: [Object(o.jsxs)("div", {
                                    className: "field mr-16",
                                    children: [Object(o.jsx)("label", {
                                        htmlFor: "freedomAge",
                                        children: "Age of financial freedom"
                                    }), Object(o.jsx)(d.a, {
                                        disabled: !0,
                                        name: "freedomAge",
                                        value: y,
                                        isNumericString: !0,
                                        onValueChange: function (e) {}
                                    })]
                                }), Object(o.jsxs)("div", {
                                    className: "field",
                                    children: [Object(o.jsx)("label", {
                                        htmlFor: "requiredRetirementAssets",
                                        children: "Required Retirement Assets **"
                                    }), Object(o.jsx)(d.a, {
                                        name: "requiredRetirementAssets",
                                        disabled: !0,
                                        value: parseInt(-1 * C),
                                        isNumericString: !0,
                                        thousandSeparator: !0,
                                        prefix: "$",
                                        onValueChange: function (e) {}
                                    })]
                                })]
                            }), Object(o.jsxs)("div", {
                                className: "group4",
                                children: [Object(o.jsx)("button", {
                                    onClick: function () {
                                        ! function (e, t, r, a, s) {
                                            var c, i, l = 5,
                                                o = l,
                                                u = 1,
                                                d = 0;
                                            if (a <= 0) return alert("The Number of Periods cannot be computed."), "";
                                            if (0 === r && d++, 0 === e && d++, 0 === t && d++, "" === n) return alert("Please enter your Current Age."), "";
                                            if (d >= 2) return alert("The Number of Periods cannot be computed."), "";
                                            if (t > 0 && e >= 0 && r >= 0) return alert("The Number of Periodscannot be computed."), "";
                                            if (0 === t && e >= 0 && r >= 0) return alert("The Number of Periods cannot be computed."), "";
                                            if ((t *= -1) === r && a / (100 * s) * r === e) return alert("The Number of Periods is not unique."), "";
                                            do {
                                                if (i = c = T(e, r, a, l, s) - t, o = l, l -= c / ((T(e, r, a, l + .001, s) - t - c) / .001), u > 200) return alert("The Number of Periods cannot be computed."), "";
                                                u++
                                            } while (Math.abs(i) > 1e-4);
                                            console.log((parseInt(n) + parseFloat(o)).toFixed(2)), P((parseInt(n) + parseFloat(o)).toFixed(2))
                                        }(p, x + p, C, N, 1), console.log("\n    currentAge=".concat(n, "\n\n    currentIncome=").concat(l, "\n\n    annualSavingsAmount=").concat(p, "\n\n    currentRetirementAssets=").concat(x, "\n\n    requiredRetirementAssets=").concat(C, "\n\n    years=").concat(y, "\n\n\n\n\n    "))
                                    },
                                    children: "Calculate"
                                }), Object(o.jsx)("button", {
                                    onClick: function () {
                                        var e = document.getElementById("app");
                                        j()().set({
                                            margin: .1,
                                            filename: "Retirement Calculator.pdf",
                                            image: {
                                                type: "jpeg",
                                                quality: 1
                                            },
                                            html2canvas: {
                                                scale: 3
                                            },
                                            jsPDF: {
                                                unit: "in",
                                                format: "letter",
                                                orientation: "portrait"
                                            }
                                        }).from(e).save()
                                    },
                                    children: "Download PDF"
                                })]
                            })]
                        })]
                    })]
                })
            };
            c.a.render(Object(o.jsx)(a.a.StrictMode, {
                children: Object(o.jsx)(h, {})
            }), document.getElementById("root"))
        }
    },
    [
        [18, 1, 3]
    ]
]);


