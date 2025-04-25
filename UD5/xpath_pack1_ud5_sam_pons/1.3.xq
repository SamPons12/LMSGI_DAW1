(: //pes

//pes/text()

//pes[last()]/text()

distinct-values(//pes/@unitat)

//producte[@codi="AAA-111"]/pes/text()

//producte[pes/@unitat="g"]/nom/text()

distinct-values(//producte[contains(nom, "l")]/pes/@unitat)

//producte[nom="Monitor"]/@codi

//producte[(pes/@unitat="g" and pes > 250) or (pes/@unitat="kg" and pes > 0.25)]/@codi :)