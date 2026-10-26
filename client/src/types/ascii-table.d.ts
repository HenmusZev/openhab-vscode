/**
 * Type declarations for `ascii-table` 0.0.9, which ships none of its own.
 *
 * The package assigns its constructor to `module.exports`, so it is declared
 * with `export =` here. That is what lets it be imported with
 * `import AsciiTable = require('ascii-table')` and called with `new`.
 *
 * Only the members this extension uses are declared.
 */
declare module 'ascii-table' {
    class AsciiTable {
        constructor(title?: string)

        /** Adds every row in one go, each inner array being one row of cells. */
        addRowMatrix(rows: unknown[][]): this

        /** Renders without the surrounding box, leaving plain aligned columns. */
        removeBorder(): this

        toString(): string
    }

    export = AsciiTable
}
