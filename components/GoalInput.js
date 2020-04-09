import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {
	const [enteredGoal, setEnteredGoal] = useState('');

	function inputGoalHandler(text){
    setEnteredGoal(text);
	}
	
	const addGoalHandler = () => {
		props.onAddGoal(enteredGoal);
		setEnteredGoal('');
	}

	return (
		<Modal visible={props.visible} animationType='slide'>
			<View style={styles.inputContainer}>
				<TextInput
					placeholder="Course Goal"
					style={styles.input}
					value={enteredGoal}
					onChangeText={inputGoalHandler}
					autoFocus={true}
					onSubmitEditing={addGoalHandler}
					/>
				<View style={{flexDirection: 'row', justifyContent: 'space-evenly', alignSelf: 'stretch'}}>
					<View style={styles.button}>
						<Button
							title="Cancel"
							color="red"
							onPress={props.onCancel}
						/>
					</View>
					<View style={styles.button}>
						<Button
							title="Add"
							onPress={addGoalHandler}
						/>
					</View>
				</View>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	inputContainer:{
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
  },
  input:{
		alignSelf: 'stretch',
		margin: 20,
    borderColor: 'rgb(153,217,234)',
    borderWidth: 1,
    paddingHorizontal: 5
	},
	button:{
		width: '30%'
	}
});

export default GoalInput;