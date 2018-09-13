# TALLER 5: BDD utilizando Cucumber y Calabash.

## Cucumber
### Login exitoso
![alt text](images/cucumber01.png)

### Registro de usuario
##### Escenarios:
* Campo Nombre: vacío y es obligatorio.
* Campo Apellidos: vacío y es obligatorio.
* Campo Correo Electrónico: vacío y es obligatorio.
* Campo Correo Electrónico: valor incorrecto.
* Campo Password: vacío y es obligatorio.
* Campo Password: valor con longitud inferior a 8 caracteres.
* Campo Acepta Condiciones: no marcado.
* Registo fallido: usuario ya existente.
* Registro exitoso.

![alt text](images/cucumber02.png)

## Calabash
Comando para ejecutar el Inspector del Layout de Aplicaciones Android:
`/Users/farruza/Library/Android/sdk/tools/bin/uiautomatorviewer`

Comando para ejecutar las pruebas:
`calabash-android run Transmilenio\ y\ Sitp_v20.3.1_apkpure.com.apk´

### Feature: Trayectorias y Rutas
##### Escenarios:
* Yo como usuario quiero consultar la trayectoria de la ruta de TRANSMI "B16" y verla en forma de lista.
* Yo como usuario quiero consultar la trayectoria de la ruta de servicio ESPECIAL "6-18" y verla en un mapa.
* Yo como usuario quiero buscar la ruta "C37" del servicio URBANO y marcarla como favorita para que me pida login social.

Ejemplo:
![alt text](images/feature1_esc2.gif)

### Feature: Planear viaje en Transmi o SITP
##### Escenarios:
* Yo como usuario quiero buscar la ruta óptima de Transmi entre la estación Av. Rojas y Pepe Sierra, y verla en un mapa.
* Yo como usuario quiero buscar las rutas óptima en SITP entre mi ubicación y el Centro Comercial Av Chile, e iniciar viaje.
* Yo como usuario quiero consultar el listado de estaciones de la troncal "Américas".
