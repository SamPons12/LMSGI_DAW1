(: for $llibres in //llibre
where $llibres//llinatges = "DATE"
return $llibres :)

(: for $llibres in //llibre
where count($llibres//autor) > 1
return $llibres :)

(: for $autors in //autor
return $autors :)

(: for $llibres in //llibre
where $llibres/any=1998 or $llibres/any="2005"
return $llibres :)

(: for $llibres in //llibre
return $llibres/@id :)

(: for $llibres in //llibre
where $llibres/@id=3
return $llibres :)

(: for $llibres in //llibre[3]/autor[last()-1]
return $llibres :)

(: for $llibres in //llibre[3]/autor[position() <=2]
return $llibres :)

(: for $llibres in //llibre
where $llibres/@id > 2
return $llibres :)

(: for $llibres in //llibre
where $llibres/any >1998 and $llibres/any <"2005"
return $llibres :)  