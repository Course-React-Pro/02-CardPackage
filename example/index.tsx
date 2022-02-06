import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../.';

const product = {
  id: '1',
  title: "Product Test",
}

const App = () => {
  return (
    <ProductCard
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
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
