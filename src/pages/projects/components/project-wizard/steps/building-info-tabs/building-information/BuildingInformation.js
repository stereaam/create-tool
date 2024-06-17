import React from "react";
import styles from "./BuildingInformation.module.scss";
import {
	Button,
	Select,
	MenuItem,
	Slider,
	Tooltip,
	IconButton,
} from "@mui/material";
import WMSMap from "../../../../map/WMSMap";
// import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
function BuildingInformation({ setWizardStep }) {
	const [value, setValue] = React.useState([1920, 2050]);
	return (
		<div className={styles.buildingInformationContainer}>
			<div className={styles.filtersWrapper}>
				<div className={styles.filterItem}>
					<div>Building Use</div>
					<div
						style={{ display: "flex", flexDirection: "column", gap: "10px" }}
					>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							value={0}
							onChange={() => {}}
							className={styles.select}
						>
							<MenuItem value={0}>Residential</MenuItem>
						</Select>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							value={0}
							onChange={() => {}}
							className={styles.select}
						>
							<MenuItem value={0}>MF</MenuItem>
						</Select>
					</div>
				</div>
				<div className={styles.filterItem}>
					<div>Building Structure</div>
					<div>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							value={0}
							onChange={() => {}}
							className={styles.select}
						>
							<MenuItem value={0}>Select all</MenuItem>
						</Select>
					</div>
				</div>
				<div className={styles.filterItem}>
					<div>Building Size</div>
					<div>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							value={0}
							onChange={() => {}}
							className={styles.select}
						>
							<MenuItem value={0}>Select all</MenuItem>
						</Select>
					</div>
				</div>
				<div className={styles.filterItem}>
					<div>Ownership type</div>
					<div>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							value={0}
							onChange={() => {}}
							className={styles.select}
						>
							<MenuItem value={0}>Select all</MenuItem>
						</Select>
					</div>
				</div>
				<div className={styles.filterItem}>
					<div>Construction year</div>
					<div>
						<Slider
							value={value}
							valueLabelDisplay="auto"
							getAriaLabel={() => "Construction year"}
							min={1920}
							max={2050}
							marks={[
								{
									value: 1920,
									label: "1920",
								},
								{
									value: 2050,
									label: "2050",
								},
							]}
						/>
					</div>
				</div>
				<div className={styles.filterItem}>
					<div>
						Demolition year{" "}
						<Tooltip
							title={
								<div>
									<div></div>
								</div>
							}
						>
							<IconButton>{/* <HelpOutlineIcon /> */}</IconButton>
						</Tooltip>
					</div>
					<div>
						<Slider
							value={value}
							valueLabelDisplay="auto"
							getAriaLabel={() => "Demolition year"}
							min={1920}
							max={2050}
							marks={[
								{
									value: 1920,
									label: "1920",
								},
								{
									value: 2050,
									label: "2050",
								},
							]}
						/>
					</div>
				</div>
				<div className={styles.buttonsWrapper}>
					<Button
						variant="contained"
						style={{ width: "50%" }}
						color="secondary"
						onClick={() => {}}
					>
						Reset filters
					</Button>
					<Button
						variant="contained"
						style={{ width: "50%" }}
						color="secondary"
						onClick={() => {}}
					>
						Apply filters
					</Button>
				</div>
			</div>
			<div className={styles.mapWrapper}>
				<WMSMap height={"550px"} />
				<div className={styles.titleWrapper}>
					<div className={styles.title}>CREATE</div>
					<span className={styles.description}>
						Embedding advanced urban material stock methods within governance
						processes to enable circular economy and cities resilience
					</span>
				</div>
			</div>
			<div className={styles.infoWrapper}>
				<div>
					<div>
						Number of selected building:<b>18</b>
					</div>
					<div>
						Total gross flor area: <b>120 m2</b>
					</div>
					<br></br>
					<br></br>
					<div>
						<b>
							{
								"<< Click on each selected building to see the detailed information"
							}
						</b>
					</div>
				</div>
				<div className={styles.buttonsWrapper}>
					<Button
						variant="contained"
						style={{
							backgroundColor: "#424242",
						}}
						onClick={() => {
							setWizardStep((prev) => (prev - 1 < 0 ? 0 : prev - 1));
						}}
					>
						Back
					</Button>
					<Button
						variant="contained"
						style={{ backgroundColor: "#02b876" }}
						onClick={() => {}}
					>
						Save and continue
					</Button>
				</div>
			</div>
		</div>
	);
}

export default BuildingInformation;
