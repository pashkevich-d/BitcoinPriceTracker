import React from 'react';
import {IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonSkeletonText} from '@ionic/react';
import './LoadingCard.css';

const LoadingCard = () => (
    <IonCard>
        <IonCardHeader>
            <IonCardSubtitle>
                <IonSkeletonText className="loading-card-name" animated></IonSkeletonText>
            </IonCardSubtitle>
            <IonCardTitle>
            <IonSkeletonText className="loading-card-value" animated></IonSkeletonText>
            </IonCardTitle>
        </IonCardHeader>
    </IonCard>
)

export default LoadingCard;