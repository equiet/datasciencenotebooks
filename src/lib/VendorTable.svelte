<div class="table">
	<div class="scrolling-wrapper">
		<table class="pure-table pure-table-striped">
			<thead>
				<tr>
					<th class="sticky-col">Platform</th>
					<th>License</th>
					<th>Ease of setup</th>
					<th>Native integrations</th>
					<th>Collaboration</th>
					<th>Comments</th>
					<th>Versioning</th>
					<th>Reproducibility</th>
					<th>Notebooks as products</th>
				</tr>
			</thead>
			<tbody>
				<slot />
			</tbody>
		</table>
	</div>
</div>

<style>
	table {
		width: 100%;
		border-collapse: separate;
		border-radius: 5px;
		-moz-border-radius: 5px;
	}
	.scrolling-wrapper {
		overflow-x: auto;
		overflow-y: hidden;
		white-space: nowrap;
	}
	.sticky-col {
		position: -webkit-sticky;
		position: sticky;
		background-color: white;
		width: 180px;
		min-width: 180px;
		max-width: 180px;
		left: 0px;
	}
	.table {
		width: calc(100% - 1rem);
		margin: 3rem 0.5rem;
		border-radius: 5px;
		box-shadow: 0px 0px 5px 1px #e4e4e4;
		display: inline-block;
	}
</style>
