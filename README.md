# Get Version from Release Notes

## Overview 
Get Release version from Release Notes file

## Expected File Format

```markdown
## 3.0.0 (2023-02-12)
* [test] - testing release notes

## 2.9.9 (1999-01-01)
* [test] - so long ago
```

## Output

```javascript
    setOutput("FULL_VERSION", `${rvMajor}.${rvMinor}.${rvPatch}`);
    setOutput("MAJOR", rvMajor);
    setOutput("MINOR", rvMinor);
    setOutput("PATCH", rvPatch);
```

## Action Usage

```yaml
-   name: Get Version
    uses: version_token_module_link
    with:
        RELEASE_NOTES_FILE_PATH     : ./RELEASE_NOTES.md
    id: VERSION

-   name: Use the Version somehow
    env: 
        VERSION: ${{ steps.VERSION.outputs }}
    run: echo "Im using the version ${{ env.VERSION.FULL_VERSION }}"

-   name: Use the Version Major Part
    env: 
        VERSION: ${{ steps.VERSION.outputs }}
    run: echo "Im using the version major part ${{ env.VERSION.MAJOR }}"
```
