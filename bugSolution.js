```javascript
import { MetadataRoute } from 'next/server'

export default function Metadata(
  props: MetadataRoute
) {
  return {
    title: 'My page',
    description: 'Page description',
  }
}
```