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

```json
{
    "version": "3.0.0",
    "major": 3,
    "minor": 0,
    "patch": 0
}
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
        VERSION: ${{ fromJSON(steps.VERSION.outputs.VERSION) }}
    run: echo "Im using the version ${{ env.VERSION.version }}"

-   name: Use the Version Major Part
    env: 
        VERSION: ${{ fromJSON(steps.VERSION.outputs.VERSION) }}
    run: echo "Im using the version major part ${{ env.VERSION.major }}"
```
