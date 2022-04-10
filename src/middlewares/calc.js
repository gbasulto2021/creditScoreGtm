const CONST_VALUES = {
  b : -1.042,
  c : 0.548,
  e : -0.297,
  g : -0.237,
  i : 0.718,
  k : -0.002,
  m : 0.508,
  o : -0.689,
  q : 0.803
}

const calc = (req,res, next)=>{
  const {b,c,e,g,i,k,m,o,q} = CONST_VALUES;
  const {ul,experiencia,capago,resfamiliar,otrosIngresos,escolaridad,tasa,garantia} = req.body;
  
  let ubicacion = ul === "centro" ? 0 : 1;
  let cargaF = resfamiliar <= 2 ? 0 : 1;
  let escol = escolaridad === "nivel-superior" ? 0 : 1;
  let garant = garantia === "garantia-real" ? 0 : 1;
   
  let result =
        b +
        c * ubicacion -
        e * experiencia -
        g * capago +
        i * cargaF -
        k * otrosIngresos+
        m * escol -
        o * tasa +
        q * garant;
  let total = 1 / Math.pow(result, 10) + 1;

 req.session.total = total;
 next()

}


module.exports = calc;