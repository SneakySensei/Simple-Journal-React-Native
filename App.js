import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';

import ListItem from './components/ListItem';
import GoalInput from './components/GoalInput';

export default function App() {
  
  const [courseGoals, setCourseGoals] = useState([]);

  const [isAddMode, setIsAddMode] = useState(false);

  function addGoalHandler(goalText){
    setCourseGoals(currentGoals => [...currentGoals, {id: Math.random().toString(), value: goalText}]);
    setIsAddMode(false);
  }

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    })
  };

  const cancel = () => {
    setIsAddMode(false);
  };


  return (
    <View style={styles.root}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />    
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancel}/>

      <FlatList
        data={courseGoals}
        renderItem={
          itemData => 
            <ListItem
              title={itemData.item.value}
              id={itemData.item.id}
              onDelete={removeGoalHandler}  
            />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root:{
    paddingHorizontal: 10,
    paddingVertical: 50
  }
});
