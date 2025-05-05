import React, { forwardRef, memo, useState, useRef, useImperativeHandle } from "react"
import { View } from "react-native"
import RBSheet from "react-native-raw-bottom-sheet"
import { colors } from "../theme"

const RbSheetCompnonet = forwardRef(({ children, height, bgColor, containerStyle }, ref) => {
	const sheetRef = useRef(null)
	const [isSheetOpen, setIsSheetOpen] = useState(false)

	useImperativeHandle(ref, () => ({
		open: () => {
			setIsSheetOpen(true)
			sheetRef.current?.open()
		},
		close: () => {
			setIsSheetOpen(false)
			sheetRef.current?.close()
		}
	}))

	return (

		<RBSheet
			ref={sheetRef}
			closeOnDragDown={true}
			closeOnPressMask={true}
			height={height}
			onClose={() => setIsSheetOpen(false)}
			customStyles={{
				wrapper: {
					backgroundColor: "transparent",
				},
				container: {
					backgroundColor: bgColor ?? colors.white,
					borderTopLeftRadius: 20,
					borderTopRightRadius: 20,
					...containerStyle,
				},
				draggableIcon: {
					backgroundColor: colors.white
				},
			}}
		>
			<View>
				{children}
			</View>
		</RBSheet>

	)
})

export default memo(RbSheetCompnonet)
