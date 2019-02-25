class Binom {
    Fact(n)
    {
        var res = 1;

        for (let i = 1; i <= n; i++)
        {
            res = res * i;
        }

        return res;
    };

    BinCo(k, n)
    {
        return this.Fact(n) / (this.Fact(k) * this.Fact(n - k));
    };

    Binom(k, n, p)
    {
        return this.BinCo(k, n) * Math.pow(p, k) * Math.pow(1 - p, n - k);
    };

    BinomRep(k, n, p)
    {
        var cm = 0;

        for (let i = 0; i <= k; i++)
        {
            cm += binom(i, n, p);
        }

        return cm;
    };

    BinomIRep(k, n, p)
    {
        return 1 - this.BinomRep(k, n, p)
    }
};

module.exports = new Binom;
