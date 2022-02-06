# paquete de prueba

```
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
```

```
  <ProductCard 
      key={product.id}
      product={product} 
      initialValues={{ 
        count: 0,
      }}
    >
      {
        ( { reset, increaseBy, isMaxCountReached, count } ) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </>
        )
      }
  </ProductCard>
```