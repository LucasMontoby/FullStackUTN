// ------------------Ejercicios clase 4------------------------------

// 1. Crea una clase llamada "Libro" con las propiedades "título", "autor" y "precio". 
// Luego, crea una subclase llamada "LibroDigital" que herede de la clase "Libro" 
// y tenga una propiedad adicional llamada "formato". 
// Agrega un método llamado "descargarLibro" que simule la descarga del libro en formato digital 
// y muestre un mensaje en consola.

// class Libro {
//     titulo: string;
//     autor: string;
//     precio: number;
//      constructor(titulo: string, autor: string, precio: number) {
//       this.titulo = titulo;
//       this.autor = autor;
//       this.precio = precio;
//     }
//   }
//    class LibroDigital extends Libro {
//     formato: string;
//      constructor(titulo: string, autor: string, precio: number, formato: string) {
//       super(titulo, autor, precio);
//       this.formato = formato;
//     }
//      descargarLibro() {
//       console.log(`Descargando libro "${this.titulo}" en formato ${this.formato}...`);
//     }
//   }
//    const libroDigital = new LibroDigital("El Principito", "Antoine de Saint-Exupéry", 9.99, "PDF");
//   libroDigital.descargarLibro();


//   2. Tomando como referencia el punto anterior, se necesita desarrollar una aplicación que permita gestionar 
//   la información de una biblioteca. Para ello, se deberá crear una clase llamada "Libro" con las siguientes 
//   propiedades: "titulo", "autor", "editorial" y "numeroPaginas". Luego, se deberá crear una subclase 
//   llamada "Prestamo" que herede de la clase "Libro" y tenga una propiedad adicional llamada "fechaPrestamo". 
//   Agrega un método llamado "calcularMulta" que calcule la multa a pagar por un préstamo atrasado 
//   en base a la fecha actual y la fechaPrestamo, y un método llamado "prestarLibro" 
//   que permita prestar un libro a un usuario. Finalmente, deberás crear un objeto a partir de la clase "Prestamo" 
//   y mostrar en consola la multa a pagar por el préstamo.

// class Libro {
//     titulo: string;
//     autor: string;
//     editorial: string;
//     numeroPaginas: number;
//      constructor(titulo: string, autor: string, editorial: string, numeroPaginas: number) {
//       this.titulo = titulo;
//       this.autor = autor;
//       this.editorial = editorial;
//       this.numeroPaginas = numeroPaginas;
//     }
//   }
//    class Prestamo extends Libro {
//     fechaPrestamo: Date;
//      constructor(titulo: string, autor: string, editorial: string, numeroPaginas: number, 
//         fechaPrestamo: Date) {
//       super(titulo, autor, editorial, numeroPaginas);
//       this.fechaPrestamo = fechaPrestamo;
//     }
//      calcularMulta() {
//       const diasRetraso = (new Date().getTime() - this.fechaPrestamo.getTime()) 
//       / (1000 * 3600 * 24);
//       const multa = diasRetraso > 7 ? (diasRetraso - 7) * 5 : 0;
//       console.log(`La multa a pagar por el préstamo es de ${multa} dólares.`);
//     }
//      prestarLibro(usuario: string) {
//       console.log(`El libro "${this.titulo}" ha sido prestado a ${usuario}.`);
//     }
//   }
//    const miPrestamo = new Prestamo("Harry Potter y la Piedra Filosofal", "J.K. Rowling", 
//    "Salamandra", 256, new Date("2023-03-10"));
//   miPrestamo.calcularMulta();
//   miPrestamo.prestarLibro("Juan Pérez");
 


// 3. Se requiere desarrollar una aplicación que permita gestionar la información de una empresa de envíos. 
// Para ello, se deberá crear una clase llamada "Envio" con las siguientes propiedades: "id", "destinatario", "direccion", 
// "fechaEnvio" y "fechaEntrega". Luego, se deberá crear una subclase llamada "Paquete" que herede de la clase "Envio" 
// y tenga una propiedad adicional llamada "peso". Agrega un método llamado "calcularCostoEnvio" que calcule 
// el costo de envío de un paquete en base al peso, y un método llamado "enviarPaquete" que permita enviar 
// un paquete a su destinatario. Finalmente, deberás crear un objeto a partir de la clase "Paquete" y 
// mostrar en consola el costo de envío del paquete.


 class Envio {
   id: number;
   destinatario: string;
   direccion: string;
   fechaEnvio: Date;
   fechaEntrega: Date;
    constructor(id: number, destinatario: string, direccion: string, fechaEnvio: Date, 
        fechaEntrega: Date) {
     this.id = id;
     this.destinatario = destinatario;
     this.direccion = direccion;
     this.fechaEnvio = fechaEnvio;
     this.fechaEntrega = fechaEntrega;
   }
 }

  class Paquete extends Envio {
   peso: number;
    constructor(id: number, destinatario: string, direccion: string, fechaEnvio: Date, 
        fechaEntrega: Date, peso: number) {
     super(id, destinatario, direccion, fechaEnvio, fechaEntrega);
     this.peso = peso;
   }
    calcularCostoEnvio(): number {
     let costo: number = 0;
     if (this.peso <= 5) {
       costo = 50;
     } else if (this.peso > 5 && this.peso <= 10) {
       costo = 75;
     } else if (this.peso > 10 && this.peso <= 20) {
       costo = 100;
     } else {
       costo = 150;
     }
     return costo;
   }
    enviarPaquete(): void {
     console.log(`El paquete ha sido enviado a ${this.destinatario}`);
   }
 }
  const paquete = new Paquete(1, "Juan Perez", "Calle 123", new Date(), new Date(), 15);
 const costoEnvio = paquete.calcularCostoEnvio();
 console.log(`El costo de envío del paquete es ${costoEnvio}`);
 paquete.enviarPaquete();