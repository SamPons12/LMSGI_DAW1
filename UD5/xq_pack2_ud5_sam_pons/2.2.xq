(: a :)
(: for $llibre in //llibre
return $llibre//autor :)

(: b :)
(: for $llibre in //llibre 
where count($llibre//autor) > 1
return $llibre :)

(: c :)
(: for $llibre in //llibre
where $llibre[any < 2004]
return $llibre :)

(: d :)
(: for $llibre in //llibre
return count($llibre//autor) :)

(: e :)
(: for $llibre in //llibre
return concat("Titulo: ", $llibre/titol, ", ", "Autores: ", count($llibre//autor)) :)

(: f :)
(: for $llibre in //llibre
return concat("ID:", $llibre/@id, " Titulo:", $llibre/titol, ", ", "Autores:", count($llibre//autor)) :)

(: h :)
(: for $llibre in //llibre
where $llibre/autor[llinatges = "Alarcon" and nom = "P."]
return $llibre/titol :)

(: i :)
(: for $llibre in //llibre
where $llibre/autor[llinatges = "DATE" and nom = "C.J."]
return $llibre/titol :)

(: j :)
(: for $llibre in //llibre
where $llibre[titol = "Bases de Datos"]
return $llibre/*[not(self::autor)] :)

(: k :)
(: for $llibre in //llibre
where $llibre[not(editorial)]
return $llibre :)

(: l :)
(: for $llibre in //llibre
where $llibre[editorial]
return $llibre :)

(: m :)
(: for $llibre in //llibre
where $llibre[editorial = "Addison-Wesley" and any > 2005]
return $llibre :)

(: n :)
(: for $llibre in //llibre
where $llibre[preu > 50.00]
return $llibre :)