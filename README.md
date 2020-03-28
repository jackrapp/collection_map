# collection_map

## Visualization of Mia's collection over time

This projects aims to answer two questions:

- What country are the majority of objects from in Mia's collection from? How has the collection changed over time?

### Source Data

This project was made possible by the collections data Mia has made available to the public at https://github.com/artsmia/collection. 
To pull large batches of records at a time the API https://search.artsmia.org/ids/ was used.

Acquisition year can be pulled from the accession number, with the exception of some Prints and Drawings objects.

Visualizations made using Tableau public - in progress.

### Accession Numbers

From the accession number, the year an object was acquired or gifted to the museum can usually be obtained:

accession_number | artist | classification | continent | department
---|---|---|---|---
10.1 | Frederick G. Smith; Artist | Drawings | Europe | Prints and Drawings
13.29 | Walter Shirlaw | Drawings | North America | Prints and Drawings
P.98.33.22 | Bart van der Leck; Publisher: Willem Scherjon | Prints | Europe | Prints and Drawings
P.98.33.18 | Bertold Löffler; Printer: Albert Berger, Vienna | Prints | Europe | Prints and Drawings
P.1,123 | Étienne Ficquet; Artist: after Hyacinthe Rigaud | Prints | Europe | Prints and Drawings

In these five cases you can see three different formats. For the first four objects, the standard format is followed - the 
first number is the year the object was gifted or purchased by Mia. As seen in the third and fourth object, letters can be used
to add more information about an object - whether they are on loan (L) or a print (P).
For the fifth object, and many other objects in the Prints and Drawings department the accession number format is very different.

For now any objects not following standard accession number format will be excluded from this visualization.

### Country Names

Country names are relatively straightforward with some tweaking done to work better with Tableau country coding - although a few objects come from countries that do not exist any more so will be excluded from any visualizations (e.g. Czechoslovakia), as well as those countries with unknown or unclear country designations (e.g. 'India or China'). 

All changed country names are added as a separate column to ensure accuracy and the ability to alter any assumed changes that are historically incorrect.
