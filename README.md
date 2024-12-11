# Conflicting Metadata Exports in Next.js 13

This repository demonstrates a potential conflict when using both the `metadata` function and a directly exported `metadata` object in Next.js 13.  This can lead to unexpected behavior or errors. The conflict arises when the framework attempts to handle both forms of metadata export simultaneously.

## Bug

The `bug.js` file showcases the code that produces the error.  It exports both a `metadata` function and a `metadata` object.  This can cause problems with Next.js's metadata handling mechanism, potentially leading to unexpected results or a build failure.

## Solution

The `bugSolution.js` file demonstrates the corrected code.  It uses only the `metadata` function for cleaner and more reliable metadata management.