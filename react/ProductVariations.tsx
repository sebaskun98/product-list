import React, { FunctionComponent } from 'react'
import { SkuSpecification } from 'vtex.checkout-graphql'

import { useItemContext } from './components/ItemContext'
import { opaque } from './utils/opaque'

const ProductVariations: FunctionComponent = () => {
  const { item } = useItemContext()

  return item.skuSpecifications && item.skuSpecifications.length > 0 ? (
    <div
      className={`c-muted-1 f6 lh-copy ${opaque(
        item.availability || undefined
      )}`}
    >
      {item.skuSpecifications.map((spec: SkuSpecification) => {
        return (
          <div
            id={`specification-${item.id}-${spec.fieldName}`}
            key={spec.fieldName || undefined}
          >
            {`${spec.fieldName}: ${spec.fieldValues.join(', ')}`}
          </div>
        )
      })}
    </div>
  ) : null
}

export default ProductVariations
