# Rutas Backend
- /productos - POST 
`Ruta encargada de crear un nuevo producto, requiere lo siguiente`
    - body:
        ```ts
        {
            nombre:"string",
            price:'decimal',
            stock:"integer"
        }

        ```
    - headers:
        ```ts
        {
            authorization:"string"
        }
        ```
