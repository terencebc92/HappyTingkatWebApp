package org.generation.happytingkat.service;

import org.generation.happytingkat.repository.entity.Package;

import java.util.List;

public interface PackageService {

    //will show what are the methods for this Item Service
    //e.g. 1) provides list all items from the database
    List<Package> all();

    void delete(int packageId);

    Package findById(int packageId);

}
