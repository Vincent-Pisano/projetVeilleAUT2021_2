package com.eq3.backend.repository;

import com.eq3.backend.model.Department;
import com.eq3.backend.model.InternshipOffer;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface InternshipOfferRepository extends MongoRepository<InternshipOffer, String> {

    @Query(value = "{'workField': ?0, 'status' : 'ACCEPTED', 'isDisabled':false}")
    List<InternshipOffer> findAllByWorkFieldAndStatusAcceptedAndIsDisabledFalse(Department workField);


    @Query(value = "{'status' : 'WAITING', 'isDisabled':false}")
    List<InternshipOffer> findAllByStatusWaitingAndIsDisabledFalse();

    List<InternshipOffer> findAllByMonitor_IdAndIsDisabledFalse(String id);
}
