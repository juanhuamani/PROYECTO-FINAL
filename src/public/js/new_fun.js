class CompartirService {
    constructor() {
      // Obtén la dirección base del servidor desde la ubicación actual
      this.direccionBase = window.location.origin;
    }
  
    generarEnlace(uniqueId) {
      if (!uniqueId) {
        throw new Error('ID de imagen no proporcionado.');
      }
  
      // Construir el enlace con la dirección base del servidor y el identificador único
      const enlaceImagen = `${this.direccionBase}/images/${uniqueId}`;
      return enlaceImagen;
    }
  }
  
  const CompartirServiceInstance = new CompartirService();
  
  // Ejemplo de uso
  const enlaceGenerado = CompartirServiceInstance.generarEnlace('123456');
  console.log(enlaceGenerado);
  