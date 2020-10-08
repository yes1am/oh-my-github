{{@ stat }}

<details>
  <summary>
    <strong>👆 👉 GitHub repositories. 👇<strong>
  </summary>
  <br>

| repositorie | description | stars |
| --- | --- | --- |{{each repos}}
| [{{ $value.name }}]({{ $value.link }}) | {{ $value.description }} | {{ $value.star }} |{{/each}}
</details>