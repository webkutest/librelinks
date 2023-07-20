import { useState } from "react";
import LinksEditor from "../../components/core/admin-panel/links-editor";
import Preview from "../../components/shared/profile-preview/preview";
import PreviewBtn from "../../components/shared/profile-preview/preview-btn";
import Layout from "@/components/layout/_layout";

const Admin = () => {
	return (
		<>
			<Layout>
				<div className="w-full lg:w-3/5 pl-4 pr-4 border-r overflow-scroll">
					<LinksEditor />
					<div className="h-[60px]" />
				</div>

			</Layout>
		</>
	);
};

export default Admin;
