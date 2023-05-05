import { run } from '@mermaid-js/mermaid-cli'
import 'mermaid'
;(async () => {
    await run(
        'src/input.mmd',
        'output/output.svg' // {optional options},
    )
})()
