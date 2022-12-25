// From http://www.redblobgames.com/making-of/line-drawing/
// Copyright 2017 Red Blob Games <redblobgames@gmail.com>
// License: Apache v2.0 <http://www.apache.org/licenses/LICENSE-2.0.html>

class Utilities {
    clamp(x, lo, hi) {
        if (x < lo) { x = lo; }
        if (x > hi) { x = hi; }
        return x;
    }

    lerp(start, end, t) {
        return start + t * (end-start);
    }

    lerpPoint(P, Q, t) {
        return {x: lerp(P.x, Q.x, t),
                y: lerp(P.y, Q.y, t)};
    }

    interpolationPoints(P, Q, N) {
        let points = [];
        for (let i = 0; i <= N; i++) {
            let t = N == 0? 0 : i / N;
            points.push(lerpPoint(P, Q, t));
        }
        return points;
    }

    roundPoint(P) {
        return {x: Math.round(P.x), y: Math.round(P.y) };
    }

    lineDistance(A, B) {
        return Math.max(Math.abs(A.x - B.x), Math.abs(A.y - B.y));
    }
}

export default Utilities;