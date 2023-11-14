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
    uses: kennethgarza/get-version-from-release-notes@{version}``
    with:
        RELEASE_NOTES_FILE_PATH     : ./RELEASE_NOTES.md
    id: VERSION

-   name: Use the Version somehow
    run: echo "Im using the version ${{ steps.VERSION.outputs.FULL_VERSION }}"

-   name: Use the Version Major Part
    run: echo "Im using the version major part ${{ steps.VERSION.outputs.MAJOR }}"
```
