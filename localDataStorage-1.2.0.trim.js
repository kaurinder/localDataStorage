/*///////////////////////////////////////////////////////////////////////////////////////////////////
localDataStorage 1.2.0
/////////////////////////////////////////////////////////////////////////////////////////////////////
https://github.com/macmcmeans/localDataStorage.js/blob/master/localDataStorage-1.2.0.trim.js
/////////////////////////////////////////////////////////////////////////////////////////////////////
This version is copyright (c) 2017, William P. "Mac" McMeans

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
3. Neither the name of copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
This version of localDataStorage incorporates SMAZ (a simple string compression library written in C)
by Salvatore Sanfilippo (https://github.com/antirez/smaz), under a BSD license. The derivative work
included in this project (a javascript port of C code) was written by personalcomputer
(https://github.com/personalcomputer/smaz.js), under the same BSD license. 
/////////////////////////////////////////////////////////////////////////////////////////////////////
SMAZ
/////////////////////////////////////////////////////////////////////////////////////////////////////
Original work Copyright (c) 2006-2009 Salvatore Sanfilippo, BSD License.
Derivative work Copyright (c) 2013 John Miller. BSD License
All rights reserved.
Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
    * Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
    * Neither the name of Smaz nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
This version of localDataStorage incorporates alvoPRNG (a pseudo random number generator) by
Ribeiro Alvo (http://www.number.com.pt/index.html), under a BSD license. 
/////////////////////////////////////////////////////////////////////////////////////////////////////
alvoPRNG 1.0
/////////////////////////////////////////////////////////////////////////////////////////////////////
Copyright (c) 2017, Ribeiro Alvo
All rights reserved.
Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
3. Neither the name of copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
/////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////*/
var localDataStorage = function(e) {
    return function(e) {
        "use strict";
        var r = function() {
            return String.fromCodePoint(128);
        }, t = function() {
            return String.fromCodePoint(129);
        }, n = function() {
            return String.fromCodePoint(141);
        }, o = function() {
            return String.fromCodePoint(142);
        }, i = function() {
            return String.fromCodePoint(143);
        }, a = function() {
            return String.fromCodePoint(144);
        }, f = 123456789, u = function() {
            return new Date().getTime() + ":" + (1e8 * Math.random() | 0);
        }(), s = e || u, c = function(e) {
            var r, t = "__storage_test__";
            try {
                return r = window[e], r.setItem(t, t), r.removeItem(t), !0;
            } catch (e) {
                return !1;
            }
        }("localStorage"), l = function(e) {
            return function(e) {
                function r(r) {
                    var a = r;
                    if (r < 10) throw new Error("Specified seed must be greater than 9");
                    a += "", t = a.length, n = "";
                    for (var f = 0; f < t; f++) n += a[t - f - 1];
                    "string" == typeof e && (t = 2 * (t + 1)), o = +("0." + n), i = +("0." + t);
                    for (var u = 0; u < 20; u++) i += o, o = (i * o + i) % 1;
                }
                var t, n, o, i, a, f = function() {
                    return new Date().getTime();
                }();
                a = e || f, r(a);
                var u = function() {
                    return i += o, o = (i * o + i) % 1;
                }, s = function() {
                    return u();
                };
                return s.seed = function(e) {
                    r(e);
                }, s;
            }(e);
        }, d = function(e) {
            var f, u = "";
            if (void 0 === e) throw new Error("No value to convert from");
            if (-1 === e.indexOf(t()) && -1 === e.indexOf(n()) && -1 === e.indexOf(o()) && -1 === e.indexOf(i()) && -1 === e.indexOf(a())) if ("{" === e[0] || "[" === e[0]) try {
                u = JSON.parse(e);
            } catch (r) {
                u = e;
            } else u = e == +e ? +e : e; else "" === u && (f = t(), -1 !== e.indexOf(f) && (e = e.substr(0, e.indexOf(f)), 
            -1 !== e.indexOf(r()) && (e = e.substr(1, e.length), e = Q(e)), u = e)), "" === u && (f = n(), 
            -1 !== e.indexOf(f) && (e = e.substr(0, e.indexOf(f)), u = new Date(JSON.parse(e)))), 
            "" === u && (f = o(), -1 !== e.indexOf(f) && (e = e.substr(0, e.indexOf(f)), u = parseFloat(e))), 
            "" === u && (f = i(), -1 !== e.indexOf(f) && (e = e.substr(0, e.indexOf(f)), u = "1" === e)), 
            "" === u && (f = a(), -1 !== e.indexOf(f) && (e = e.substr(0, e.indexOf(f)), u = JSON.parse(e)));
            return u;
        }, h = function(e) {
            var f = "", u = "";
            if (void 0 === e) throw new Error("No value to convert to");
            return "string" == typeof e ? (u = "string", f = t(), I(e) && (u = "compressed string", 
            e = g(e), e = r() + e)) : "object" == typeof e && (e instanceof Date || e == new Date(e)) ? (u = "date", 
            f = n(), e = JSON.stringify(e)) : "number" == typeof e ? (u = "integer", -1 !== (e + "").indexOf(".") && (u = "float"), 
            f = o(), e += "") : "boolean" == typeof e ? (u = "boolean", f = i(), e = Number(e), 
            e += "") : "object" == typeof e && (u = "object", e instanceof Array && (u = "array"), 
            f = a(), e = JSON.stringify(e)), "" !== f && (e += f), [ e, u ];
        }, g = function(e) {
            return B.compress(e);
        }, v = function(e) {
            for (var r = [ "bytes", "KB", "MB" ], t = 0; e > 1024; ) t++, e /= 1024;
            return e.toFixed(2) + " " + r[t];
        }, m = function(e, r) {
            var t, n = e.length, o = function() {
                var e = new Uint32Array(2);
                return window.crypto.getRandomValues(e), +("0." + e[0] + e[1]);
            };
            for (r = r || o; --n; ) t = Math.floor(r() * (n + 1)), e[t] = [ e[n], e[n] = e[t] ][0];
        }, y = function(e, r) {
            for (var t, n = new Array(e.length), o = new Array(e.length), i = e.length, a = 0; a < i; a++) o[a] = a;
            for (var a = i - 1; a > 0; a--) t = Math.floor(r() * (a + 1)), o[a] = [ o[t], o[t] = o[a] ][0];
            for (var a = 0; a < i; a++) n[o[a]] = e[a];
            return n;
        }, w = function(e) {
            var r = .059886774281039834 * e;
            return r += 21845.33332824707, e = 0 | r, r -= e, r *= e, e = 0 | r, r -= e, (e ^= 4294967296 * r) >>> 0;
        }, b = function(e) {
            if (void 0 === e) throw new Error("Key is undefined");
            var r = localStorage.getItem(e);
            return r ? d(r) : void 0;
        }, p = function(e) {
            e = "" + e;
            for (var r = e.length, t = r - 1; t >= 0; t--) {
                var n = e.charCodeAt(t);
                n > 127 && 2047 >= n ? r++ : n > 2047 && 65535 >= n && (r += 2), n >= 56320 && 57343 >= n && t--;
            }
            return r;
        }, S = function(e) {
            return e = "" + e, F(e).length;
        }, O = function() {
            var e = R(), r = {}, t = "";
            if (e.length) for (var n = 0, o = e.length; n < o; n++) {
                for (var i = new Array(), a = 0, f = localStorage.length; a < f; a++) t = localStorage.key(a), 
                JSON.stringify(b(t)) === JSON.stringify(e[n]) && (t = z(t), i.push(t));
                r[n] = {
                    value: e[n],
                    keys: i
                };
            }
            return {
                dupecount: e.length,
                dupes: r
            };
        }, x = function() {
            return s + ".";
        }, k = function(e) {
            if (void 0 !== e) {
                var r = JSON.stringify(e), t = 0, n = "", o = "", i = function(e) {
                    var r, t = 0;
                    if (0 === e.length) return t;
                    for (var n = 0, o = e.length; n < o; n++) r = e.charCodeAt(n), t = (t << 5) - t + r, 
                    t |= 0;
                    return t;
                };
                n = e instanceof Array ? "ARRAY1" : "boolean" == typeof e ? "BOOLEAN2" : e instanceof Date ? "DATE4" : "number" == typeof e ? -1 !== (e + "").indexOf(".") ? "FLOAT8" : "INTEGER16" : "string" == typeof e ? "STRING32" : "OBJECT64", 
                o = r + r.length + n + i(r) + i(function(e) {
                    return Array.from(e).reverse().join("");
                }(r));
                for (var a = 0; a < o.length; a++) t += o.charCodeAt(a);
                return [ t, o ];
            }
        }, E = function(e) {
            return x() + e;
        }, A = function(e) {
            for (var r = new Array(), t = new Array(), n = 0, o = e.length; n < o; n++) t = e[n], 
            e.lastIndexOf(t) !== n && -1 === r.indexOf(t) && r.push(t);
            for (var n = 0, o = r.length; n < o; n++) r[n] = d(r[n]);
            return r;
        }, N = function(e) {
            if (void 0 === e) throw new Error("No key specified");
            var u = "", s = "";
            if ("undefined" == typeof _valueToCheck) {
                if (!C(e)) return;
                if ("" === (s = localStorage.getItem(e))) return "undefined";
            } else s = _valueToCheck;
            return -1 === s.indexOf(t()) && -1 === s.indexOf(n()) && -1 === s.indexOf(o()) && -1 === s.indexOf(i()) && -1 === s.indexOf(a()) ? "[" === s[0] ? u = "presumed array" : "{" === s[0] ? u = "presumed object" : s == +s ? u = "presumed number" : (s = Z(s, f, e), 
            s = U(s, f, e), -1 !== s.indexOf(t()) ? u = "scrambled string" : -1 !== s.indexOf(n()) ? u = "scrambled date" : -1 !== s.indexOf(o()) ? (u = "scrambled number", 
            u = -1 !== s.indexOf(".") ? "scrambled float" : "scrambled integer") : -1 !== s.indexOf(i()) ? u = "scrambled boolean" : -1 !== s.indexOf(a()) ? (u = "scrambled object", 
            "[" === s[0] && (u = "scrambled array")) : u = "presumed string") : ("" === u && -1 !== s.indexOf(t()) && (u = "string", 
            -1 !== s.indexOf(r()) && (u = "compressed string")), "" === u && -1 !== s.indexOf(n()) && (u = "date"), 
            "" === u && -1 !== s.indexOf(o()) && (u = "number", u = -1 !== s.indexOf(".") ? "float" : "integer"), 
            "" === u && -1 !== s.indexOf(i()) && (u = "boolean"), "" === u && -1 !== s.indexOf(a()) && (u = "object", 
            "[" === s[0] && (u = "array"))), u;
        }, C = function(e) {
            return null !== localStorage.getItem(e);
        }, K = function(e) {
            for (var r = JSON.stringify(e), t = "", n = "", o = 0, i = localStorage.length; o < i; o++) if (n = localStorage.key(o), 
            -1 !== n.indexOf(x()) && (t = JSON.stringify(b(n)), r === t)) return !0;
            return !1;
        }, I = function(e) {
            var r = !1, t = !1;
            return r = e === B.decompress(B.compress(e)), t = p(B.compress(e)) + 3 < p(e), !(!r || !t);
        }, _ = function(e) {
            var r = "", t = 0;
            if (void 0 === e) {
                for (var n = 0, o = localStorage.length; n < o; ++n) r += localStorage.key(n);
                t = p(r);
            } else C(e) && (t = p(e));
            return t *= 2;
        }, J = function() {
            var e = 4022871197;
            return function(r) {
                r = r.toString();
                for (var t = 0, n = r.length; t < n; t++) {
                    e += r.charCodeAt(t);
                    var o = .02519603282416938 * e;
                    e = o >>> 0, o -= e, o *= e, e = o >>> 0, o -= e, e += 4294967296 * o;
                }
                return 2.3283064365386963e-10 * (e >>> 0);
            };
        }, M = function(e) {
            return Array.from(e).reverse().join("");
        }, D = function(e, r, t, n, o, i, a, f) {
            var u = new CustomEvent("localDataStorage", {
                detail: {
                    message: e,
                    method: r,
                    key: t,
                    oldval: n,
                    newval: o,
                    oldtype: i,
                    newtype: a,
                    prefix: f,
                    timestamp: +new Date()
                },
                bubbles: !1,
                cancelable: !0
            });
            document.dispatchEvent(u);
        }, j = function(e, r) {
            if (void 0 === e) throw new Error("Key is undefined");
            if (void 0 === r) throw new Error("Key's value is undefined");
            try {
                localStorage.setItem(e, r);
            } catch (e) {
                throw !e || "QUOTA_EXCEEDED_ERR" !== e.name && "NS_ERROR_DOM_QUOTA_REACHED" !== e.name && "QuotaExceededError" !== e.name ? new Error("An error occurred writing to localStorage") : new Error("Quota exceeded for localStorage");
            }
        }, T = function(e) {
            f = e;
        }, R = function() {
            for (var e, r, t = new Array(), n = 0, o = 0, i = localStorage.length; o < i; o++) r = localStorage.key(o), 
            -1 !== r.indexOf(x()) && (t[n++] = localStorage.getItem(r));
            return e = A(t), 0 === e.length ? [] : e;
        }, P = function(e, r, t) {
            for (var n = k(r)[0] + k(t)[0], o = w(n) + "", i = M(o), a = Number(i), f = l(a), u = Number((a + "").charAt(2)) + Number((a + "").charAt(1)) + Number((a + "").charAt(0)), s = S(k(t)[1]) + S(k(r)[1]) + u, c = 0; c < s; c++) f();
            return e += String.fromCharCode(Math.floor(966 * Math.random()) + 35) + String.fromCharCode(Math.floor(966 * Math.random()) + 35) + String.fromCharCode(Math.floor(966 * Math.random()) + 35) + String.fromCharCode(Math.floor(966 * Math.random()) + 35), 
            e = M(e), e = e.split(""), m(e, f), e = e.join("");
        }, B = function() {
            function e() {}
            return e.codebook = {
                " ": 0,
                the: 1,
                e: 2,
                t: 3,
                a: 4,
                of: 5,
                o: 6,
                and: 7,
                i: 8,
                n: 9,
                s: 10,
                "e ": 11,
                r: 12,
                " th": 13,
                " t": 14,
                in: 15,
                he: 16,
                th: 17,
                h: 18,
                "he ": 19,
                to: 20,
                "\r\n": 21,
                l: 22,
                "s ": 23,
                d: 24,
                " a": 25,
                an: 26,
                er: 27,
                c: 28,
                " o": 29,
                "d ": 30,
                on: 31,
                " of": 32,
                re: 33,
                "of ": 34,
                "t ": 35,
                ", ": 36,
                is: 37,
                u: 38,
                at: 39,
                "   ": 40,
                "n ": 41,
                or: 42,
                which: 43,
                f: 44,
                m: 45,
                as: 46,
                it: 47,
                that: 48,
                "\n": 49,
                was: 50,
                en: 51,
                "  ": 52,
                " w": 53,
                es: 54,
                " an": 55,
                " i": 56,
                "\r": 57,
                "f ": 58,
                g: 59,
                p: 60,
                nd: 61,
                " s": 62,
                "nd ": 63,
                "ed ": 64,
                w: 65,
                ed: 66,
                "http://": 67,
                for: 68,
                te: 69,
                ing: 70,
                "y ": 71,
                The: 72,
                " c": 73,
                ti: 74,
                "r ": 75,
                his: 76,
                st: 77,
                " in": 78,
                ar: 79,
                nt: 80,
                ",": 81,
                " to": 82,
                y: 83,
                ng: 84,
                " h": 85,
                with: 86,
                le: 87,
                al: 88,
                "to ": 89,
                b: 90,
                ou: 91,
                be: 92,
                were: 93,
                " b": 94,
                se: 95,
                "o ": 96,
                ent: 97,
                ha: 98,
                "ng ": 99,
                their: 100,
                '"': 101,
                hi: 102,
                from: 103,
                " f": 104,
                "in ": 105,
                de: 106,
                ion: 107,
                me: 108,
                v: 109,
                ".": 110,
                ve: 111,
                all: 112,
                "re ": 113,
                ri: 114,
                ro: 115,
                "is ": 116,
                co: 117,
                "f t": 118,
                are: 119,
                ea: 120,
                ". ": 121,
                her: 122,
                " m": 123,
                "er ": 124,
                " p": 125,
                "es ": 126,
                by: 127,
                they: 128,
                di: 129,
                ra: 130,
                ic: 131,
                not: 132,
                "s,": 133,
                "d t": 134,
                "at ": 135,
                ce: 136,
                la: 137,
                "h ": 138,
                ne: 139,
                "as ": 140,
                tio: 141,
                "on ": 142,
                "n t": 143,
                io: 144,
                we: 145,
                " a ": 146,
                om: 147,
                ", a": 148,
                "s o": 149,
                ur: 150,
                li: 151,
                ll: 152,
                ch: 153,
                had: 154,
                this: 155,
                "e t": 156,
                "g ": 157,
                "e\r\n": 158,
                " wh": 159,
                ere: 160,
                " co": 161,
                "e o": 162,
                "a ": 163,
                us: 164,
                " d": 165,
                ss: 166,
                "\n\r\n": 167,
                "\r\n\r": 168,
                '="': 169,
                " be": 170,
                " e": 171,
                "s a": 172,
                ma: 173,
                one: 174,
                "t t": 175,
                "or ": 176,
                but: 177,
                el: 178,
                so: 179,
                "l ": 180,
                "e s": 181,
                "s,": 182,
                no: 183,
                ter: 184,
                " wa": 185,
                iv: 186,
                ho: 187,
                "e a": 188,
                " r": 189,
                hat: 190,
                "s t": 191,
                ns: 192,
                "ch ": 193,
                wh: 194,
                tr: 195,
                ut: 196,
                "/": 197,
                have: 198,
                "ly ": 199,
                ta: 200,
                " ha": 201,
                " on": 202,
                tha: 203,
                "-": 204,
                " l": 205,
                ati: 206,
                "en ": 207,
                pe: 208,
                " re": 209,
                there: 210,
                ass: 211,
                si: 212,
                " fo": 213,
                wa: 214,
                ec: 215,
                our: 216,
                who: 217,
                its: 218,
                z: 219,
                fo: 220,
                rs: 221,
                ">": 222,
                ot: 223,
                un: 224,
                "<": 225,
                im: 226,
                "th ": 227,
                nc: 228,
                ate: 229,
                "><": 230,
                ver: 231,
                ad: 232,
                " we": 233,
                ly: 234,
                ee: 235,
                " n": 236,
                id: 237,
                " cl": 238,
                ac: 239,
                il: 240,
                "</": 241,
                rt: 242,
                " wi": 243,
                div: 244,
                "e, ": 245,
                " it": 246,
                whi: 247,
                " ma": 248,
                ge: 249,
                x: 250,
                "e c": 251,
                men: 252,
                ".com": 253
            }, e.reverse_codebook = [ " ", "the", "e", "t", "a", "of", "o", "and", "i", "n", "s", "e ", "r", " th", " t", "in", "he", "th", "h", "he ", "to", "\r\n", "l", "s ", "d", " a", "an", "er", "c", " o", "d ", "on", " of", "re", "of ", "t ", ", ", "is", "u", "at", "   ", "n ", "or", "which", "f", "m", "as", "it", "that", "\n", "was", "en", "  ", " w", "es", " an", " i", "\r", "f ", "g", "p", "nd", " s", "nd ", "ed ", "w", "ed", "http://", "for", "te", "ing", "y ", "The", " c", "ti", "r ", "his", "st", " in", "ar", "nt", ",", " to", "y", "ng", " h", "with", "le", "al", "to ", "b", "ou", "be", "were", " b", "se", "o ", "ent", "ha", "ng ", "their", '"', "hi", "from", " f", "in ", "de", "ion", "me", "v", ".", "ve", "all", "re ", "ri", "ro", "is ", "co", "f t", "are", "ea", ". ", "her", " m", "er ", " p", "es ", "by", "they", "di", "ra", "ic", "not", "s, ", "d t", "at ", "ce", "la", "h ", "ne", "as ", "tio", "on ", "n t", "io", "we", " a ", "om", ", a", "s o", "ur", "li", "ll", "ch", "had", "this", "e t", "g ", "e\r\n", " wh", "ere", " co", "e o", "a ", "us", " d", "ss", "\n\r\n", "\r\n\r", '="', " be", " e", "s a", "ma", "one", "t t", "or ", "but", "el", "so", "l ", "e s", "s,", "no", "ter", " wa", "iv", "ho", "e a", " r", "hat", "s t", "ns", "ch ", "wh", "tr", "ut", "/", "have", "ly ", "ta", " ha", " on", "tha", "-", " l", "ati", "en ", "pe", " re", "there", "ass", "si", " fo", "wa", "ec", "our", "who", "its", "z", "fo", "rs", ">", "ot", "un", "<", "im", "th ", "nc", "ate", "><", "ver", "ad", " we", "ly", "ee", " n", "id", " cl", "ac", "il", "</", "rt", " wi", "div", "e, ", " it", "whi", " ma", "ge", "x", "e c", "men", ".com" ], 
            e.flush_verbatim = function(e) {
                var r, t, n, o;
                for (t = [], e.length > 1 ? (t.push(String.fromCharCode(255)), t.push(String.fromCharCode(e.length - 1))) : t.push(String.fromCharCode(254)), 
                n = 0, o = e.length; n < o; n++) r = e[n], t.push(r);
                return t;
            }, e.compress = function(r) {
                var t, n, o, i, a, f, u;
                for (f = "", a = [], o = 0; o < r.length; ) {
                    for (n = !1, i = 7, r.length - o < 7 && (i = r.length - o), i = u = i; i <= 0 ? u < 0 : u > 0; i = i <= 0 ? ++u : --u) if (null != (t = e.codebook[r.substr(o, i)])) {
                        f && (a = a.concat(e.flush_verbatim(f)), f = ""), a.push(String.fromCharCode(t)), 
                        o += i, n = !0;
                        break;
                    }
                    n || (f += r[o], o++, 256 === f.length && (a = a.concat(e.flush_verbatim(f)), f = ""));
                }
                return f && (a = a.concat(e.flush_verbatim(f))), a.join("");
            }, e.decompress = function(r) {
                var t, n, o, i, a, f;
                for (i = "", n = function() {
                    var e, n, o;
                    for (o = [], t = e = 0, n = r.length; 0 <= n ? e < n : e > n; t = 0 <= n ? ++e : --e) o.push(r.charCodeAt(t));
                    return o;
                }(), t = 0; t < n.length; ) if (254 === n[t]) {
                    if (t + 1 > n.length) throw "Malformed SMAZ";
                    i += r[t + 1], t += 2;
                } else if (255 === n[t]) {
                    if (t + n[t + 1] + 2 >= n.length) throw "Malformed SMAZ";
                    for (o = a = 0, f = n[t + 1] + 1; 0 <= f ? a < f : a > f; o = 0 <= f ? ++a : --a) i += r[t + 2 + o];
                    t += 3 + n[t + 1];
                } else i += e.reverse_codebook[n[t]], t++;
                return i;
            }, e;
        }(), z = function(e) {
            return e.slice(x().length, e.length);
        }, F = function(e) {
            for (var r, t, n = [], o = 0, i = e.length; i > o; ) r = e.charCodeAt(o++), r >= 55296 && 56319 >= r && i > o ? (t = e.charCodeAt(o++), 
            56320 == (64512 & t) ? n.push(((1023 & r) << 10) + (1023 & t) + 65536) : (n.push(r), 
            o--)) : n.push(r);
            return n;
        }, Q = function(e) {
            return B.decompress(e);
        }, U = function(e, r, t) {
            for (var n = k(r)[0] + k(t)[0], o = w(n) + "", i = M(o), a = Number(i), f = l(a), u = Number((a + "").charAt(2)) + Number((a + "").charAt(1)) + Number((a + "").charAt(0)), s = S(k(t)[1]) + S(k(r)[1]) + u, c = 0; c < s; c++) f();
            return e = e.split(""), e = y(e, f), e = e.join(""), e = M(e);
        }, G = function(e) {
            var r = "", t = 0;
            if (void 0 === e) {
                for (var n = 0, o = localStorage.length; n < o; ++n) r += b(localStorage.key(n));
                t = p(r);
            } else C(e) && (t = "boolean" === N(e) ? 1 : p(b(e)));
            return t *= 2;
        }, L = function(e) {
            var r = "", t = 0;
            if (void 0 === e) {
                for (var n = 0, o = localStorage.length; n < o; ++n) r += localStorage.getItem(localStorage.key(n));
                t = p(r);
            } else C(e) && (t = p(localStorage.getItem(e)));
            return t *= 2;
        }, Z = function(e, r, t) {
            var n = "", o = k(r)[0], i = w(o) + "", a = M(i), f = Number(a) + k(t)[0] + k(r)[0], u = f + "", s = l(u), c = o + Number((f + "").charAt(0)) + Number((f + "").charAt(1)) + Number((f + "").charAt(2)) + Number(i.charAt(0)), d = S(k(t)[1]) + S(k(r)[1]) + c, h = J(), g = k(r)[1], v = 0, m = 0, y = 0, b = 0;
            e += "";
            for (var p = 0; p < d; p++) s();
            for (var p = 0, O = e.length; p < O; p++) v = Math.floor(257 * s()) + 0, y = v, 
            b = o, m = Math.floor(h(g) * (b - y + 1)) + y, s() < .537 ? n += String.fromCharCode(v ^ e.charCodeAt(p)) : n += String.fromCharCode(m ^ e.charCodeAt(p));
            return n;
        }, H = function() {
            return "localDataStorage 1.2.0 using " + s;
        };
        H.bytes = function(e) {
            return c ? v(void 0 !== e ? G(E(e)) + _(E(e)) : G() + _()) : c;
        }, H.bytesall = function(e) {
            return c ? v(void 0 !== e ? L(E(e)) + _(E(e)) : L() + _()) : c;
        }, H.chopget = function(e) {
            var r, t = "";
            return c ? C(E(e)) ? (t = b(E(e)), r = this.showtype(e), localStorage.removeItem(E(e)), 
            D("excise key", "chopget", e, t, void 0, r, void 0, x()), t) : void 0 : c;
        }, H.clear = function() {
            var e, r = 0;
            if (!c) return c;
            for (var t = localStorage.length; t--; ) e = localStorage.key(t), -1 !== e.indexOf(x()) && (localStorage.removeItem(e), 
            r++);
            return r + (1 === r ? " key removed" : " keys removed");
        }, H.countdupes = function() {
            return c ? R().length : c;
        }, H.crunch = function(e) {
            return c ? g(e) : c;
        }, H.decrunch = function(e) {
            return c ? _decrunch(e) : c;
        }, H.forcehasval = function(e) {
            var r = !1;
            if (!c) return c;
            for (var t = 0, n = localStorage.length; t < n; t++) e == localStorage.getItem(localStorage.key(t)) && (r = !0);
            return r;
        }, H.forceget = function(e) {
            if (!c) return c;
            if (void 0 === e) throw new Error("Key is undefined");
            return localStorage.getItem(E(e));
        }, H.forceset = function(e, r) {
            if (!c) return c;
            if (void 0 === e) throw new Error("Key is undefined");
            if (void 0 === r) throw new Error("Key's value is undefined");
            var t = b(E(e)), n = this.showtype(e), o = r, i = h(r)[1];
            j(E(e), r), JSON.stringify(t) === JSON.stringify(o) && n === i || (void 0 === t ? D("create new key", "forceset", e, t, o, n, i, x()) : D("key value change", "forceset", e, t, o, n, i, x()));
        }, H.get = function(e) {
            return c ? b(E(e)) : c;
        }, H.getscramblekey = function() {
            return c ? f : c;
        }, H.haskey = function(e) {
            return c ? C(E(e)) : c;
        }, H.hasval = function(e) {
            return c ? K(e) : c;
        }, H.isArray = function(e) {
            if (!c) return c;
            if (void 0 === e) throw new Error("Key is undefined");
            return "array" === N(E(e));
        }, H.isBoolean = function(e) {
            if (!c) return c;
            if (void 0 === e) throw new Error("Key is undefined");
            return "boolean" === N(E(e));
        }, H.isDate = function(e) {
            if (!c) return c;
            if (void 0 === e) throw new Error("Key is undefined");
            return "date" === N(E(e));
        }, H.isFloat = function(e) {
            if (!c) return c;
            if (void 0 === e) throw new Error("Key is undefined");
            return "float" === N(E(e));
        }, H.isInteger = function(e) {
            if (!c) return c;
            if (void 0 === e) throw new Error("Key is undefined");
            return "integer" === N(E(e));
        }, H.isNumber = function(e) {
            if (!c) return c;
            if (void 0 === e) throw new Error("Key is undefined");
            return "float" === N(E(e)) || "integer" === N(E(e));
        }, H.isObject = function(e) {
            if (!c) return c;
            if (void 0 === e) throw new Error("Key is undefined");
            return "object" === N(E(e));
        }, H.isString = function(e) {
            if (!c) return c;
            if (void 0 === e) throw new Error("Key is undefined");
            return "string" === N(E(e));
        }, H.keybytes = function(e) {
            return c ? v(void 0 === e ? _() : _(E(e))) : c;
        }, H.keys = function() {
            var e = "", r = 0;
            if (!c) return c;
            for (var t = localStorage.length; t--; ) e = localStorage.key(t), -1 !== e.indexOf(x()) && r++;
            return r;
        }, H.listdupes = function() {
            return c ? O() : c;
        }, H.remove = function(e) {
            if (!c) return c;
            if (void 0 === e) throw new Error("Key is undefined");
            var r = b(E(e)), t = this.showtype(e);
            localStorage.removeItem(E(e)), D("remove key", "remove", e, r, void 0, t, void 0, x());
        }, H.rename = function(e, r) {
            if (!c) return c;
            var t = this.forceget(e);
            this.remove(e), this.forceset(r, t);
        }, H.safeget = function(e, r) {
            var t;
            return c ? C(E(e)) ? (t = localStorage.getItem(E(e)), void 0 === r ? (t = Z(t, f, e), 
            t = U(t, f, e)) : (t = Z(t, r, e), t = U(t, r, e)), t = d(t)) : void 0 : c;
        }, H.safeset = function(e, r, t) {
            if (!c) return c;
            if (void 0 === e) throw new Error("Key is undefined");
            if (void 0 === r) throw new Error("Key's value is undefined");
            var n = "", o = null === this.forceget(e) ? void 0 : this.forceget(e), i = this.showtype(e), a = "";
            r = h(r)[0], void 0 === t ? (r = P(r, f, e), r = Z(r, f, e), n = " using global scramble key") : (r = P(r, t, e), 
            r = Z(r, t, e), n = " using user scramble key"), j(E(e), r), a = this.forceget(e), 
            o !== a && (void 0 === o ? D("create new key" + n, "safeset", e, o, a, i, "scrambled key", x()) : D("key value change" + n, "safeset", e, o, a, i, "scrambled key", x()));
        }, H.set = function(e, r) {
            if (!c) return c;
            if (void 0 === e) throw new Error("Key is undefined");
            if (void 0 === r) throw new Error("Key's value is undefined");
            var t = b(E(e)), n = this.showtype(e), o = r, i = h(r)[1];
            r = h(r)[0], j(E(e), r), JSON.stringify(t) === JSON.stringify(o) && n === i || (void 0 === t ? D("create new key", "set", e, t, o, n, i, x()) : D("key value change", "set", e, t, o, n, i, x()));
        }, H.setscramblekey = function(e) {
            if (!c) return c;
            if (void 0 === e) throw new Error("No scramble key specified");
            T(e);
        }, H.showdupes = function() {
            return c ? R() : c;
        }, H.showkey = function(e) {
            if (!c) return c;
            if (void 0 === e) throw new Error("No key value supplied");
            for (var r = "", t = new Array(), n = "", o = 0, i = 0, a = localStorage.length; i < a; i++) n = localStorage.key(i), 
            -1 !== n.indexOf(x()) && (t[o++] = n);
            t.sort();
            for (var i = 0, a = t.length; i < a; i++) if (n = t[i], r = b(n), JSON.stringify(r) === JSON.stringify(e)) return z(n);
        }, H.showkeys = function(e) {
            if (!c) return c;
            if (void 0 === e) throw new Error("No key value supplied");
            for (var r = O(), t = r.dupecount, n = JSON.stringify(e), o = "", i = 0; i < t; i++) if (o = r.dupes[i].value, 
            o = JSON.stringify(o), n === o) return r.dupes[i].keys;
        }, H.showprefix = function() {
            return c ? s + "." : c;
        }, H.showtype = function(e) {
            if (!c) return c;
            if (void 0 === e) throw new Error("Key is undefined");
            return N(E(e));
        }, H.size = function(e) {
            return c ? C(E(e)) ? S(b(E(e))) : void 0 : c;
        }, H.softset = function(e, r) {
            if (!c) return c;
            if (void 0 === e) throw new Error("Key is undefined");
            if (void 0 === r) throw new Error("Key's value is undefined");
            C(E(e)) || j(E(e), r);
        }, H.valbytes = function(e) {
            return c ? v(void 0 === e ? G() : G(E(e))) : c;
        }, H.valbytesall = function(e) {
            return c ? v(void 0 === e ? L() : L(E(e))) : c;
        }, H.version = "1.2.0";
        var V = v(p(s + ".")), X = v(2 * p(s + "."));
        return function() {
            var r, t = !1;
            if (c) if (void 0 === e) console.info("No prefix specified. Creating a %cnasty-looking %crandom prefix --\x3e %c" + s + ".", "font-style: italic;", "font-style: normal;", "font-weight: bold;"); else if ("" === e) console.info("Empty prefix given, but a usable prefix is %cstrongly recommended%c to organize keys!", "text-decoration: underline;", "text-decoration: none;"); else {
                for (var n = 0, o = localStorage.length; n < o; n++) if (r = localStorage.key(n), 
                -1 !== r.indexOf(s + ".")) {
                    t = !0;
                    break;
                }
                t ? console.warn("%cAttention! %cKeys with this prefix already exist in localStorage for this domain!", "color: red; font-weight: bold;", "color: red;") : console.log("Instantiated. Prefix adds " + V + " to every key name (stored using " + X + ").");
            } else console.warn("%cAttention! Cannot access localStorage! %cBailing out...", "color: red; font-weight: bold;", "color: red;");
        }(), H;
    }(e);
};
